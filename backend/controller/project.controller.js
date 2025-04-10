import mongoose from "mongoose";
import Project from "../models/createProject.model.js";
import cloudinary from "../utils/cloudinary.js";

export const saveData = async (req, res) => {
  try {
    const {
      projectName,
      title,
      projectUrl,
      coverImgUrl,
      projectImgUrl,
      projectStart,
      projectEnd,
      type,
      status,
      briefAboutWebsite,
      detailedDescription,
      mainImgUrl,
      toolImgs,
      skills,
      gellaryImgs,
      reviewerImgUrl,
      reviewMessage,
      rating,
    } = req.body;

    // console.log(title, projectUrl, coverImgUrl, projectStart);

    const newProject = await Project.create({
      title,
      url: projectUrl,
      coverImg: coverImgUrl,
      ProjectImg: projectImgUrl,
      projectName,
      projectStart,
      projectEnd,
      type,
      status,
      briefAboutWebsite,
      detailedDescription,
      mainImgUrl,
      toolImgs,
      skills,
      gellaryImgs,
      reviewerImgUrl,
      reviewMessage,
      rating,
    });

    if (!newProject) {
      return res.status(400).send({
        success: false,
        message: "Failed to create new project",
      });
    }

    return res.status(201).json({
      success: true,
      data: newProject,
      message: "Prosjektet er lagret.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const {
      projectName,
      title,
      projectUrl,
      coverImgUrl,
      projectImgUrl,
      projectStart,
      projectEnd,
      type,
      status,
      briefAboutWebsite,
      detailedDescription,
      mainImgUrl,
      toolImgs,
      skills,
      gellaryImgs,
      reviewerImgUrl,
      reviewMessage,
      rating,
    } = req.body;

    const { projectId } = req.params;

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      {
        projectName,
        title,
        url: projectUrl,
        coverImg: coverImgUrl,
        ProjectImg: projectImgUrl,
        projectStart,
        projectEnd,
        type,
        status,
        briefAboutWebsite,
        detailedDescription,
        mainImgUrl,
        toolImgs,
        skills,
        gellaryImgs,
        reviewerImgUrl,
        reviewMessage,
        rating,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).send({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedProject,
      message: "Project updated successfully!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const changeProjectVisibility = async (req, res) => {
  try {
    const { isVisible } = req.body;

    const { projectId } = req.params;

    if (!projectId) {
      return res.status(400).send({
        success: false,
        message: "Something went wrong, please try again later",
      });
    }

    const newVisibility = isVisible === undefined ? true : !isVisible;
    // console.log(newVisibility);
    

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      {
        isVisible: newVisibility,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).send({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedProject,
      message: "Project visibility change successfully successfully!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const getData = async (req, res) => {
  try {
    const result = await Project.find().select("title url coverImg ProjectImg isVisible");
    return res.status(200).send({
      success: true,
      data: result,
      message: "Prosjekt grunnlagt vellykket.",
    });
  } catch (error) {
    console.log(`Error in getdata controller: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const getSingleData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Project.findById(id);
    return res.status(200).json({
      success: true,
      data: result,
      message: "Prosjekt grunnlagt vellykket.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const updateSingleData = async (req, res) => {
  const { id } = req.params;
  const { title, url, imageUrl, coverImg } = req.body;

  // console.log(coverImg);
  // console.log(imageUrl);

  try {
    const isProjectExists = await Project.findById(id);

    let uploadedUrl = "";

    if (imageUrl) {
      const result = await cloudinary.uploader.upload(imageUrl, {
        folder: "SIDESONE",
      });
      uploadedUrl = result.secure_url;
    }

    if (!uploadedUrl && imageUrl) {
      return res.status(400).send({
        success: false,
        message: "Failed to upload image",
      });
    }

    if (!isProjectExists) {
      return res.status(404).json({
        success: false,
        message: "Finner ikke prosjektet",
      });
    }
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        url,
        coverImg: uploadedUrl ? uploadedUrl : coverImg,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Prosjektet ble oppdatert",
      data: updatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Finner ikke prosjektet",
      error: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Project.findByIdAndDelete(id);
    console.log(result);
    return res.status(200).json({
      success: true,
      data: result,
      message: "prosjektet ble slettet",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};
