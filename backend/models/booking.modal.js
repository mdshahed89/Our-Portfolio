import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phoneNo: {
      type: Number,
    },
    dateAndTime: {
      type: String,
      required: [true, "Date & Time is required"],
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
