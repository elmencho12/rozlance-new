import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  conversationId: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  read: { type: Boolean, default: false },
  delivered: { type: Boolean, default: false }
}, { timestamps: true });
schema.index({ conversationId: 1, createdAt: -1 });
export default mongoose.models.Message || mongoose.model('Message', schema);