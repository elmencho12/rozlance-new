import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  school: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date,
  grade: String,
  activities: String,
  description: String,
  skills: [String]
}, { timestamps: true });
export default mongoose.models.Education || mongoose.model('Education', schema);