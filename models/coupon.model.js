import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code:{
        type: String,
        unique: true,
        required: true,
    },
    discountPercent : {
        type: Number,
        required: true,
    },
    validFrom : Date,
    validUntil: Date,
    isActive: {
        type:Boolean,
        default:true,
    }
}, {timestamps: true});

export default Coupon = mongoose.model("Coupon", couponSchema);