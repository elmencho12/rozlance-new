import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  endorsements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  endorsementsCount: { type: Number, default: 0 }
}, { timestamps: true });
schema.index({ user: 1, name: 1 }, { unique: true });
export default mongoose.models.Skill || mongoose.model('Skill', schema);