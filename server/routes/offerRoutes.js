import { Router } from "express";
import upload from "../middleware/upload.js";
import {
  createOffer,
  getAllOffers,
  getFullOffer,
  getFavoriteOffers,
  toggleFavorite,
} from "../controllers/offerController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = new Router();

router.get("/offers", getAllOffers);
router.get("/offers/:id", getFullOffer);
router.post(
  "/offers",
  upload.fields([
    { name: "previewImage", maxCount: 1 },
    { name: "photos", maxCount: 6 },
  ]),
  createOffer
);
router.get("/favorite", getFavoriteOffers);
router.put("/:id/favorite", toggleFavorite);
router.put("/:id/favorite", authenticateToken, toggleFavorite);
export default router;
