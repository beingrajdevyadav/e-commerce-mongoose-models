import mongoose from "mongoose";

const shippingServiceSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    carrier: {
        type: String,
        required: true,
    },
    trackingNumber: String,
    status: {
        type: String,
        enum: ["pending", "shipped", "in-transit", "delivered", "failed"],
        default: "pending",
    },
    shippedAt: Date,
    deliveredAt: Date,

}, {timestamps: true});


export default ShippingService = mongoose.model("ShippingService", shippingServiceSchema);