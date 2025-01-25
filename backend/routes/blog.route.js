import express from "express";
import {
  deleteData,
  getBlogsForClient,
  getData,
  getDetailsData,
  getOnlyThreeBlog,
  getSingleData,
  saveData,
  updateData,
} from "../controller/blog.controller.js";

const router = express.Router();
router.post("/save-blog", saveData);
router.get("/get-blog", getData);
router.get("/get-three-blog", getOnlyThreeBlog);
router.get("/get-client-blogs", getBlogsForClient);
router.get("/get-details/:id", getDetailsData);
router.get("/single-blog/:id", getSingleData);
router.patch("/update-blog/:id", updateData);
router.delete("/delete-blog/:id", deleteData);
export default router;
