import Booking from "../models/booking.modal.js";

export const sendBookingData = async (req, res) => {
  const { title, fullName, email, phoneNo, dateAndTime } = req.body;

  try {
    if (!fullName || !email || !dateAndTime || !title) {
      return res.status(400).send({
        success: false,
        message: "Fullt navn, e-post, dato og klokkeslett er påkrevd",
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
        message: "Kunne ikke sende bestillingsdata",
      });
    }

    return res.status(201).send({
      success: true,
      message: "Bestillingsdata ble sendt",
      booking: savedBooking,
    });
  } catch (error) {
    console.log(`Server error when sending Booking Data: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Serverfeil ved sending av bestillingsdata",
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const allBooking = await Booking.find().sort({ createdAt: -1 });

    return res.status(201).send({
      success: true,
      message: "Boken ble funnet",
      bookings: allBooking,
    });
  } catch (error) {
    console.log(`Server error when getting all Booking Data: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Serverfeil ved henting av alle bestillingsdata",
    });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Booking.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Bestilling ikke funnet.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Bestillingen ble slettet.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt under sletting av bestillingen.",
      error: error.message,
    });
  }
};
