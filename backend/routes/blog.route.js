import express from "express";
import {
    deleteData,
  getData,
  getDetailsData,
  saveData,
} from "../controller/blog.controller.js";

const router = express.Router();
router.post("/save-blog", saveData);
router.get("/get-blog", getData);
router.get("/get-details/:id", getDetailsData);
router.delete("/delete-blog/:id", deleteData);
export default router;
