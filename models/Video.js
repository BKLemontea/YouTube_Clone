import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is reqired"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comment: [ // []를 쓰는 이유는 Video는 여러 개의 comment를 가지기 때문이다.
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;