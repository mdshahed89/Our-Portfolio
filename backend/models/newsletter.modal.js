import mongoose from "mongoose";

const newsLetterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
  },
  { timestamps: true }
);

const Newsletter = mongoose.model("Newsletter", newsLetterSchema);

export default Newsletter;
