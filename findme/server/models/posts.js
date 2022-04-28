import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
    },
    tags: [String],
    selectedFile: String,
    likesCount: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

const Post = mongoose.model("Posts", postSchema);

export default Post;