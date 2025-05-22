import { Router } from "express";
import offerRouter from "./offerRoutes.js";
import userRoates from "./userRoutes.js";

const router = new Router();

router.use("/", offerRouter);
router.use("/", userRoates);

export default router;
