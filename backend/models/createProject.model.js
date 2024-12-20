import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    url: {
      type: String,
      required: [true, "Project Live URL is required"],
    },
    image: {
      type: String,
      required: [true, "Image is Required"],
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
