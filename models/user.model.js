import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    role: {
        type: String,
        enum: ["user", "admin"], 
        default: "user",
    },
    phone: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },

}, {timestamps: true});


export default User = mongoose.model("User", userSchema);