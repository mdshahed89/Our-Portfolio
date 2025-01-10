import Project from "../models/createProject.model.js";
export const saveData = async (req, res) => {
  try {
    const project = req.body;

    const result = await Project.create(project);
    res.status(201).json({
      success: true,
      data: result,
      message: "Prosjektet er lagret.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const getData = async (req, res) => {
  try {
    const result = await Project.find();
    res.status(200).json({
      success: true,
      data: result,
      message: "Prosjekt grunnlagt vellykket.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Project.findByIdAndDelete(id);
    console.log(result);
    res.status(200).json({
      success: true,
      data: result,
      message: "Prosjekt slettet.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};
