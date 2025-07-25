import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required: true,
    },
    changeType: {
        type: String,
        enum: ["IN", "OUT"],
        required: true,
    },
    quantityChanged: {
        type: Number,
        required: true,
    },
    note: String,
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true});

export default Inventory = mongoose.model("Inventory", inventorySchema);