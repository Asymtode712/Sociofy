import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 40,
            unique: true
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 40,
            unique: true
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
            required: true,
            default: "",
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {timestamps: true}
);

const User = mongoose.model("User",UserSchema);
export default User;
