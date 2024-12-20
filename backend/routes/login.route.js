import express from "express";
import { adminData, createAdmin } from "../controller/login.controller.js";

const router = express.Router();
router.post("/login", adminData);
router.post("/create-admin", createAdmin)

export default router;
