import {Schema, model} from "mongoose";

const carSchema = new Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: String,
    },
    model: {
        type: String,
    },
    year: {
        type: String,
    },
    mileage: {
        type: Number,
    },
    engineType: {
        type: String,
    },
    engineSize: {
        type: Number,
    },
    transmission: {
        type: String,
    },
    bodyType: {
        type: String,
    },
    color: {
        type: String,
    },
    tags: {
        type: String,
    },
    condition: {
        type: String,
    },
    location: {
        type: String,
    },
    contactPhone: {
        type: String,
    },
    files: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model("Car", carSchema);