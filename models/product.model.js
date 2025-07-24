import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    brand: String,
    category: String,
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        default: 0,
    },
    imgages: [String],
    ratings: { 
        type: Number,
        default: 0,
    },
    reviewsCount: {
        type: Number,
        default: 0
    },
  
}, {timestamps:true});

export default Product = mongoose.model("Product", productSchema);