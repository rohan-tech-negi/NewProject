import express from "express";
import { protectRoute } from "../middleware/protectRoute";


const router = express.Router();

router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions); 
router.get("/my-recent", protectRoute, getMyRecentSessions);

export default router;