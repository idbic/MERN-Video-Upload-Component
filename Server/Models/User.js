import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true,
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true,
    },
    password: {
        type: String, 
        required: true, 
    }, 
    image: {
        type: String, 
    },
    subscribers: {
        type: Number,
    },
    subscribedUsers: {
        users: [String],

    }

}, {timestamps: true, })


export default mongoose.model("User", UserSchema)

