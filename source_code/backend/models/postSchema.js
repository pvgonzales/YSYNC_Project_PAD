import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    hearts: { type: [mongoose.Schema.Types.ObjectId], default: [] },
    comments: { type: [{ userId: mongoose.Schema.Types.ObjectId, text: String }], default: [] },
    isAnnouncement: { type:Boolean, default:true},
    isPinned: { type:Boolean, default: false},
    isEvent: { type:Boolean, default: false },
    eventDate: { type: Date },
    attachment: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

const Posts = mongoose.model("Posts", postSchema);


export default Posts;