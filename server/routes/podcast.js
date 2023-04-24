import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addView, addepisodes, createPodcast, favoritPodcast, getByCategory, getByTag, getPodcastById, getPodcasts, random, search, mostpopular } from "../controllers/podcasts.js";


const router = express.Router();

//create a podcast
router.post("/",verifyToken, createPodcast);
//get all podcasts
router.get("/", getPodcasts);
//get podcast by id
router.get("/get/:id",getPodcastById)

//add episode to a 
router.post("/episode",verifyToken, addepisodes);

//favorit/unfavorit podcast
router.post("/favorit",verifyToken,favoritPodcast); 

//add view
router.post("/addview/:id",addView); 


//searches
router.get("/mostpopular", mostpopular)
router.get("/random", random)
router.get("/tags", getByTag)
router.get("/category", getByCategory)
router.get("/search", search)





export default router;