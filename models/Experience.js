import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  employmentType: { type: String, default: 'Full-time' },
  locationType: { type: String, default: 'On-site' },
  startDate: Date,
  endDate: Date,
  currentlyWorking: Boolean,
  description: String,
  skills: [String]
}, { timestamps: true });
export default mongoose.models.Experience || mongoose.model('Experience', schema);