import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: String,
    logo: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

export default Store = mongoose.model("Store", storeSchema);