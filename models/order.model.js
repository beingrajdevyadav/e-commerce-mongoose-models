import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true,
    },
    orderItems:[
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", 
                required: true,
            },
            quantity: {
                type: Number, 
                required : true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    shippingInfo:{
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String,
    },
    texPrice: Number,
    shippingPrice: Number,
    totoalPrice: Number,
    isPaid: {
        type:Boolean,
        default: false,
    },
    paidAt: Date,
    isDelivered: {
        type: Boolean,
        default: false,
    },
    deliveredAt: Date,
    
}, {timestamps: true});

export default Order = mongoose.model("Order", orderSchema);