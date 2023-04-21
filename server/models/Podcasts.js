import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const PodcastsSchema = new mongoose.Schema({
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
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    type: {
        type: String,
        default: "audio",
    },
    category: {
        type: String,
        default: "podcast",
    },
    file: {
        type: String,
        default: "",
    },
},
    { timestamps: true,
     }
);

export default mongoose.model("Podcasts", PodcastsSchema);