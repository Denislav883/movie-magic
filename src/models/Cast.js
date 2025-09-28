import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cast name is required!"]
    },
    age: {
        type: Number,
        required: [true, "Cast age is required!"]
    },
    born: {
        type: String,
        required: [true, "Cast born is required!"]
    },
    imageUrl: {
        type: String,
        required: [true, "Cast imageUrl is required!"]
    }
});

const Cast = model("Cast", castSchema);

export default Cast;