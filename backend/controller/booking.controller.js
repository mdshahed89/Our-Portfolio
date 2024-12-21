import Booking from "../models/booking.modal.js";

export const sendBookingData = async (req, res) => {
  const { title, fullName, email, phoneNo, dateAndTime } = req.body;

  try {
    console.log(title, fullName, email, dateAndTime);

    if (!fullName || !email || !dateAndTime || !title) {
      return res.status(400).send({
        success: false,
        message: "Fullname, email, Date & Time is required",
      });
    }

    const booking = new Booking({
      title,
      fullName,
      email,
      phoneNo,
      dateAndTime,
    });

    const savedBooking = await booking.save();

    if (!savedBooking) {
      return res.status(400).send({
        success: false,
        message: "Failed to send booking data",
      });
    }

    return res.status(201).send({
      success: true,
      message: "Booking Data sent successfully",
      booking: savedBooking,
    });
  } catch (error) {
    console.log(`Server error when sending Booking Data: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Server Error when sending Booking Data",
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const allBooking = await Booking.find().sort({ createdAt: -1 });

    return res.status(201).send({
      success: true,
      message: "Booking Data sent successfully",
      bookings: allBooking,
    });
  } catch (error) {
    console.log(`Server error when getting all Booking Data: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Server Error when getting all Booking Data",
    });
  }
};
