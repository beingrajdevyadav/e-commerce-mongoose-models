import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },
    method: String,
    status: String,
    transactionId : String,
    amount: Number,
    paidAt: Date,
}, {timestamps});

export default Payment = mongoose.model("Payment", paymentSchema);