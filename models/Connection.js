import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending','accepted','declined'], default: 'pending' },
  message: String
}, { timestamps: true });
schema.index({ requester: 1, recipient: 1 }, { unique: true });
export default mongoose.models.Connection || mongoose.model('Connection', schema);