import express from "express";
import {
  deleteProject,
  getData,
  saveData,
} from "../controller/project.controller.js";

const router = express.Router();
router.post("/save-project", saveData);
router.get("/get-project", getData);
router.delete("/delete-project/:id", deleteProject);
export default router;
