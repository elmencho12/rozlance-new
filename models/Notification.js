import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['like','comment','connection','job','message','view'], required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  content: String,
  read: { type: Boolean, default: false },
  link: String
}, { timestamps: true });
export default mongoose.models.Notification || mongoose.model('Notification', schema);