import Blog from "../models/blog.model.js";

export const saveData = async (req, res) => {
  try {
    const blog = req.body;
    const result = await Blog.create(blog);
    res.status(201).json({
      success: true,
      data: result,
      message: "Bloggen er lagret.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const getData = async (req, res) => {
  try {
    const result = await Blog.find();
    res.status(201).json({
      success: true,
      data: result,
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const getDetailsData = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Blog.findById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Finner ikke bloggen.",
      });
    }
    res.status(200).json({
      success: true,
      data: result,
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Blog.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: result,
      message: "Blog deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
