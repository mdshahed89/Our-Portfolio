import express from "express";
import { getAllBooking, sendBookingData } from "../controller/booking.controller.js";

const router = express.Router();


router.post("/send-data", sendBookingData);
router.get("/get-all-data", getAllBooking)



export default router;
