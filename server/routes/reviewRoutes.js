import Router from "express";
import { addReview } from "../controllers/reviewController.js";
import { getReviewsByOfferId } from "../controllers/reviewController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = new Router();

router.post("/:offerId", addReview);
router.get("/:offerId", getReviewsByOfferId);
router.post("/:offerId", authenticateToken, addReview);

export default router;
