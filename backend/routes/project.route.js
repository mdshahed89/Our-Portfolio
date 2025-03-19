import express from "express";
import {
  changeProjectVisibility,
  deleteProject,
  getData,
  getSingleData,
  saveData,
  updateProject,
  updateSingleData,
} from "../controller/project.controller.js";

const router = express.Router();
router.post("/save-project", saveData);
router.put("/update-project/:projectId", updateProject);
router.put("/change-project-visibility/:projectId", changeProjectVisibility);
router.get("/get-project", getData);
router.get("/single-project/:id", getSingleData);
router.patch("/update-project/:id", updateSingleData);
router.delete("/delete-project/:id", deleteProject);
export default router;
