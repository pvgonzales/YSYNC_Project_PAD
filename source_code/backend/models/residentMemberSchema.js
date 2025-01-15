import mongoose from "mongoose";

const residentMemberSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    traineeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainee', required: true },
    orgBatch: { type: Number, required: true },
    department: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'inactive', 'alumni'],
      required: true
    },
    isMentor: { type: Boolean, required: true },
    // These fields are optional based on the rendering of data.
    whyYouShouldChooseMe: { type: String }, 
    whatToExpect: { type: String },        
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const ResidentMember = mongoose.model("ResidentMember", residentMemberSchema);

export default ResidentMember;