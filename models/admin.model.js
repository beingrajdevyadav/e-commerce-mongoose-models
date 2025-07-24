import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    action: String,
    target: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
    ip: String,
},{timestamps: true});

export default Admin = mongoose.model("Admin", adminSchema);