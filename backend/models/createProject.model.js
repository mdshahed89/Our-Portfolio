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
    coverImg: {
      type: String,
      required: [true, "Image is Required"],
    },
    projectName: {
      type: String,
    },
    projectStart: {
      type: String,
    },
    projectEnd: {
      type: String,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
    },
    briefAboutWebsite: {
      type: String,
    },
    detailedDescription: {
      type: String,
    },
    mainImgUrl: {
      type: String,
    },
    toolImgs: {
      type: [String],
    },
    skills: {
      type: [String],
    },
    gellaryImgs: {
      type: [String],
    },
    reviewerImgUrl: {
      type: String,
    },
    reviewMessage: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
