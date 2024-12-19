import Blog from "../models/blog.model.js";

export const saveData = async (req, res) => {
  try {
    const blog = req.body;
    console.log(blog);
    const result = await Blog.create(blog);
    console.log(result);
    res.status(201).json({
      success: true,
      data: result,
      message: "Blog saved successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};
