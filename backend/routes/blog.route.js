import express from "express";
import { saveData } from "../controller/blog.controller.js";

const router = express.Router();
router.post("/save-blog", saveData);
export default router;
