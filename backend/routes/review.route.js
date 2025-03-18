import express from "express";
import { addReview, deleteReview, getReviews, updateReview } from "../controller/review.controller.js";

const router = express.Router();


router.post("/add-review", addReview);
router.put("/update-review/:id", updateReview);
router.get("/get-all-review", getReviews);
router.delete("/delete-review/:id", deleteReview);



export default router;
