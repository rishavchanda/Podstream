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
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    views: {
        type: Number,
        default: 0,
    },
    episodes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Episodes",
        default: [],
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model("Podcasts", PodcastsSchema);