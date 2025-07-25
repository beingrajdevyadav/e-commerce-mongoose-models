import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
    },
}, {timestamps: true});

export default  ProductTag = mongoose.model("ProdutTag", tagSchema);