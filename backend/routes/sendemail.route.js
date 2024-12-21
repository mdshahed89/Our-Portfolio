import express from "express";
import {
  resetPassword,
  sendEmail,
  sendLogoEmail,
  sendResetEmail,
} from "../controller/sendemail.controller.js";

const router = express.Router();
router.post("/send-email", sendEmail);
router.post("/send-logo-email", sendLogoEmail);
router.post("/send-reset-email", sendResetEmail);
router.patch("/reset-password", resetPassword);
export default router;
