import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const EpisodesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        default: "",
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        default: "audio",
    },
    duration: {
        type: String,
        default: "",
    },
    file: {
        type: String,
        default: "",
    },
},
    { timestamps: true,
     }
);

export default mongoose.model("Episodes", EpisodesSchema);