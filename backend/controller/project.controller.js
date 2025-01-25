import Project from "../models/createProject.model.js";
export const saveData = async (req, res) => {
  try {
    const project = req.body;

    const result = await Project.create(project);
    return res.status(201).json({
      success: true,
      data: result,
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
  const payload = req.body;

  try {
    const isProjectExists = await Project.findById(id);

    if (!isProjectExists) {
      return res.status(404).json({
        success: false,
        message: "Finner ikke prosjektet",
      });
    }
    const updatedProject = await Project.findByIdAndUpdate(id, payload, {
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
