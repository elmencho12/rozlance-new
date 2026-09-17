import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import Connection from '@/models/Connection';

const JWT_SECRET = process.env.JWT_SECRET;

function authUser(req) {
  const token = req.headers.get('authorization')?.replace('Bearer ','');
  if (!token) return null;
  try { return jwt.verify(token, JWT_SECRET); } catch { return null; }
}

export async function POST(req) {
  await dbConnect();
  const user = authUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  const { recipientId, message } = await req.json();
  const exists = await Connection.findOne({
    $or: [
      { requester: user.id, recipient: recipientId },
      { requester: recipientId, recipient: user.id }
    ]
  });
  if (exists) return NextResponse.json({ error: 'Already connected or pending' }, { status: 400 });

  const conn = await Connection.create({
    requester: user.id,
    recipient: recipientId,
    message
  });
  return NextResponse.json({ connection: conn }, { status: 201 });
}

export async function GET(req) {
  await dbConnect();
  const user = authUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  const connections = await Connection.find({
    $or: [{ requester: user.id }, { recipient: user.id }],
    status: 'accepted'
  }).populate('requester recipient', 'name headline avatar');
  
  return NextResponse.json({ connections });
}