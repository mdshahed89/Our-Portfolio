import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema(
  {
    available: {
      type: String,
      required: [true, "Availability is required"],
    }
  },
  { timestamps: true }
);

const Availability = mongoose.model("Availability", availabilitySchema);

export default Availability;
