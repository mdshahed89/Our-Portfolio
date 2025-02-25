import Blog from "../models/blog.model.js";

export const saveData = async (req, res) => {
  try {
    const blog = req.body;
    const result = await Blog.create(blog);
    return res.status(201).json({
      success: true,
      data: result,
      message: "Bloggen er lagret.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const getData = async (req, res) => {
  try {
    const result = await Blog.find();
    return res.status(201).json({
      success: true,
      data: result,
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};
export const getOnlyThreeBlog = async (req, res) => {
  try {
    const result = await Blog.find().limit(3);
    return res.status(201).json({
      success: true,
      data: result,
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};
export const getBlogsForClient = async (req, res) => {
  try {
    const result = await Blog.find();
    return res.status(200).json({
      success: true,
      data: result,
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const getDetailsData = async (req, res) => {
  const id = req.params.id;

  try {
    const currentBlog = await Blog.findById(id);
    if (!currentBlog) {
      return res.status(404).json({
        success: false,
        message: "Finner ikke bloggen.",
      });
    }

    const previousBlog = await Blog.findOne({
      createdAt: { $lt: currentBlog.createdAt },
    })
      .sort({ createdAt: -1 })
      .select("_id title");
    const nextBlog = await Blog.findOne({
      createdAt: { $gt: currentBlog.createdAt },
    })
      .sort({ createdAt: 1 })
      .select("_id title");

    return res.status(200).json({
      success: true,
      data: currentBlog,
      otherData: {
        previousBlogId: previousBlog ? previousBlog._id : null,
        previousBlogTitle: previousBlog ? previousBlog.title : "",
        nextBlogId: nextBlog ? nextBlog._id : null,
        nextBlogTitle: nextBlog ? nextBlog.title : "",
      },
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    console.log(`Error in blog details controller: ${error}`);

    return res.status(500).send({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const getSingleData = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const result = await Blog.findById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Finner ikke bloggen.",
      });
    }
    // console.log(result);
    return res.status(200).json({
      success: true,
      data: result,
      message: "Bloggen ble funnet.",
    });
  } catch (error) {
    return res.status(500).json({
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

    return res.status(200).json({
      success: true,
      data: result,
      message: "Bloggen ble slettet.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt",
      error: error.message,
    });
  }
};

export const updateData = async (req, res) => {
  const { title, content, coverImage } = req.body;

  try {
    const updatedBlogPost = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: title,
        content: content,
        coverImage: coverImage,
      },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Finner ikke blogginnlegget" });
    }
    return res.status(200).json({
      success: true,
      message: "Blogginnlegget ble oppdatert",
      blog: updatedBlogPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Serverfeil under oppdatering av blogginnlegg",
    });
  }
};
