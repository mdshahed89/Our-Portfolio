import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    rating: {
      type: String,
      required: [true, "Rating is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    ref: {
      type: String,
      default: "Google"
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
