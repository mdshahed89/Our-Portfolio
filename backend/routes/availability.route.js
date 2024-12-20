import express from "express";
import { getAvailability, setAvailability } from "../controller/availability.controller.js";

const router = express.Router();


router.post("/set-data", setAvailability);
router.get("/get-availability", getAvailability)



export default router;
