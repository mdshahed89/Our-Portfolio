import Booking from "../models/booking.modal.js";
import nodemailer from "nodemailer";



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

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SIDESONE_EMAIL,
          pass: process.env.SIDESONE_EMAIL_PASS,
        },
      });

    const mailOptions = {
      from: process.env.SIDESONE_EMAIL,
      to: process.env.SIDESONE_EMAIL || "your-receiving-email@example.com",
      // to: [process.env.SIDESONE_EMAIL, "r2scoder@gmail.com"],
      replyTo: email,
      subject: "Nytt møte bestilt",
      html: `
        <h3>Nytt møte bestilt</h3>
        <p><strong>Tittel:</strong> ${title}</p>
        <p><strong>Fullt navn:</strong> ${fullName}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefonnummer:</strong> ${phoneNo || "Ikke oppgitt"}</p>
        <p><strong>Dato og tid:</strong> ${dateAndTime}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

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
