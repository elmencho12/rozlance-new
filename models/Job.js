import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  location: String,
  locationType: { type: String, enum: ['On-site','Remote','Hybrid'], default: 'On-site' },
  employmentType: { type: String, default: 'Full-time' },
  description: { type: String, required: true },
  skills: [String],
  salaryMin: Number,
  salaryMax: Number,
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  applicantsCount: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.models.Job || mongoose.model('Job', schema);