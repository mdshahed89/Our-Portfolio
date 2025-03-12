import Project from "../models/createProject.model.js";
import cloudinary from "../utils/cloudinary.js";

export const saveData = async (req, res) => {
  try {
    const {title, url, image} = req.body;

    let imageUrl = ""

    if (image) {
      const result = await cloudinary.uploader.upload(image, {
        folder: "SIDESONE",
      });
      imageUrl = result.secure_url;
    }

    if(!imageUrl){
      return res.status(400).send({
        success: false,
        message: "Failed to upload image"
      })
    }

    const newProject = await Project.create({
      title,
      url, 
      image: imageUrl
    });

    if(!newProject){
      return res.status(400).send({
        success: false,
        message: "Failed to create new project"
      })
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

export const getData = async (req, res) => {
  try {
    const result = await Project.find();
    return  res.status(200).send({
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
    return  res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};
export const updateSingleData = async (req, res) => {
  const { id } = req.params;
  const {title, url, imageUrl, image} = req.body;

  try {

    const isProjectExists = await Project.findById(id);

    let uploadedUrl = ""

    if (image) {
      const result = await cloudinary.uploader.upload(imageUrl, {
        folder: "SIDESONE",
      });
      uploadedUrl = result.secure_url;
    }

    if(!uploadedUrl){
      return res.status(400).send({
        success: false,
        message: "Failed to upload image"
      })
    }

    if (!isProjectExists) {
      return res.status(404).json({
        success: false,
        message: "Finner ikke prosjektet",
      });
    }
    const updatedProject = await Project.findByIdAndUpdate(id, {
      title,
      url,
      image: uploadedUrl ? uploadedUrl : image
    }, {
      new: true,
    });
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
    return  res.status(200).json({
      success: true,
      data: result,
      message: "prosjektet ble slettet",
    });
  } catch (error) {
    return  res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};
