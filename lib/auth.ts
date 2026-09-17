import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const JWT_SECRET = process.env.JWT_SECRET || "rozlance_secret_2026";
export const hashPassword = async (p: string) => await bcrypt.hash(p, 12);
export const comparePassword = async (p: string, h: string) => await bcrypt.compare(p, h);
export const generateToken = (id: string) => jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" });
export const verifyToken = (t: string) => { try { return jwt.verify(t, JWT_SECRET) as any; } catch { return null; } };