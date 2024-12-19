import express from "express";
import { adminData } from "../controller/login.controller.js";

const router = express.Router();
router.post("/login", adminData);

export default router;
