import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: String,
  banner: String,
  tagline: String,
  industry: String,
  size: { type: String, default: '1-10' },
  website: String,
  description: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followersCount: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  verified: { type: Boolean, default: false }
}, { timestamps: true });
export default mongoose.models.Company || mongoose.model('Company', schema);