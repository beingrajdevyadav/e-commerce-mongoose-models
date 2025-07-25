import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: String,
    message: String,
    isRead: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: ["info", "warning", "promo", "order"],
        default: "info",
    },
    createdAt : {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

export default Notification = mongoose.model("Notification", notificationSchema);