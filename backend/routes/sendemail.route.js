import express from "express";
import { sendEmail, sendLogoEmail } from "../controller/sendemail.controller.js";

const router = express.Router();
router.post("/send-email", sendEmail);
router.post("/send-logo-email", sendLogoEmail);
export default router;
