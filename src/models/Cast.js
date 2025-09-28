import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        String,
        required: [true, "Cast name is required!"]
    },
    age: {
        Number,
        required: [true, "Cast age is required!"]
    },
    born: {
        Number,
        required: [true, "Cast born is required!"]
    },
    imageUrl: {
        String,
        required: [true, "Cast imageUrl is required!"]
    }
});

const Cast = model("Cast", castSchema);

export default Cast;