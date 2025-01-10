import express from "express";
import {
  deleteBooking,
  getAllBooking,
  sendBookingData,
} from "../controller/booking.controller.js";

const router = express.Router();

router.post("/send-data", sendBookingData);
router.get("/get-all-data", getAllBooking);
router.delete("/delete-booking/:id", deleteBooking);

export default router;
