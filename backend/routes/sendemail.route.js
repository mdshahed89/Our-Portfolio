import express from "express";
import {
  changePassword,
  resetPassword,
  sendChatbotDataMail,
  sendChatbotMail,
  sendContactEmai,
  sendEmail,
  sendLogoEmail,
  sendMarkettingDataMail,
  sendResetEmail,
} from "../controller/sendemail.controller.js";

const router = express.Router();
router.post("/send-email", sendEmail);
router.post("/send-chatbot-email", sendChatbotDataMail);
router.post("/send-seo-email", sendMarkettingDataMail);
router.post("/send-logo-email", sendLogoEmail);
router.post("/send-reset-email", sendResetEmail);
router.patch("/reset-password", resetPassword);
router.patch("/change-password", changePassword);
router.post("/send-contact-info", sendContactEmai);
router.post("/send-messages", sendChatbotMail);
export default router;
