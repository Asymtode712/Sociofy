import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        },
        picturePath:String,
        location: String,
        description: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", postSchema);

export default Post;