import express from "express";
import { getAvailability, setAvailability } from "../controller/availability.controller.js";

const router = express.Router();


router.post("/set-data", setAvailability);
router.get("/get-data", getAvailability)



export default router;
