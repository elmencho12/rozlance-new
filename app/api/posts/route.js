import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';

const JWT_SECRET = process.env.JWT_SECRET;

async function getUserFromReq(req) {
  const auth = req.headers.get('authorization');
  if (!auth) return null;
  const token = auth.replace('Bearer ', '');
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch { return null; }
}

export async function GET(req) {
  await dbConnect();
  const user = await getUserFromReq(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 10;

  const posts = await Post.find({ visibility: 'public' })
    .populate('user', 'name headline avatar')
    .sort({ createdAt: -1 })
    .skip((page-1)*limit)
    .limit(limit);

  return NextResponse.json({ posts, page });
}

export async function POST(req) {
  await dbConnect();
  const user = await getUserFromReq(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { content, image } = await req.json();
  if (!content?.trim()) return NextResponse.json({ error: 'Content required' }, { status: 400 });

  const post = await Post.create({
    user: user.id,
    content,
    image
  });

  return NextResponse.json({ post }, { status: 201 });
}