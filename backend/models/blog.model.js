import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Author name is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    coverImage: {
      type: String,
      required: [true, "Image is Required"],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
