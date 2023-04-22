import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getUser } from "../controllers/user.js";


const router = express.Router();

//get  user
router.get("/",verifyToken, getUser);





export default router;