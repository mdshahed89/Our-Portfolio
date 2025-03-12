import express from "express";
import { createNewsletter, deleteNewsletter, getNewsletters } from "../controller/newsletter.controller.js";

const router = express.Router();


router.post("/add-newsletter", createNewsletter);
router.get("/get-all-newsletter", getNewsletters);
router.delete("/delete-newsletter/:id", deleteNewsletter);



export default router;
