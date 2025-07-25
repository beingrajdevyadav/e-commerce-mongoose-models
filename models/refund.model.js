import mongoose from "mongoose";

const refundSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    type: {
        type: String,
        enum: ["refund", "return"],
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
     type: String,
     enum: ["pending", "approved", "rejected", "processed"],
     default: "pending",   
    },
    requiredAt : {
        type: Date,
        default: Date.now,
    },
    processedAt: Date,
    notes: String,
}, {timestamps: true});

export default Refund = mongoose.model("Refund", refundSchema);