import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String, lastName: String, email: { type: String, unique: true },
  password: String, headline: { type: String, default: "Founder @ Rozlance | Pakistan 🇵🇰" },
  bio: { type: String, default: "" }, location: { type: String, default: "Pakistan" },
  experience: { type: Array, default: [] }, skills: { type: Array, default: [] },
  resumeUrl: { type: String, default: "" }, category: { type: String, default: "Technology" }
}, { timestamps: true });
export default mongoose.models.User || mongoose.model("User", UserSchema);