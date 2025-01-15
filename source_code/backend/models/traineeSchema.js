import mongoose from "mongoose";

const traineeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    interests: { type: [String], required: true },
    univBatch: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

const Trainee = mongoose.model("Trainee", traineeSchema);

export default Trainee;