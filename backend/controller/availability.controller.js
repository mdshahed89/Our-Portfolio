import Availability from "../models/availability.modal.js";

export const setAvailability = async (req, res) => {
  const { startDate, endDate } = req.body;

  try {
    // 1. Validate Input
    if (!startDate || !endDate) {
      return res.status(400).send({
        success: false,
        message: "Startdato og sluttdato er obligatorisk",
      });
    }

    // 2. Check if availability already exists
    const existData = await Availability.findOne(); // Finds the first document (singleton logic)

    if (!existData) {
      // 3. If no data exists, create a new document
      const newAvailability = new Availability({ startDate, endDate });
      await newAvailability.save();

      return res.status(201).send({
        success: true,
        message: "Tilgjengelighet satt",
        availability: newAvailability,
      });
    } else {
      // 4. If data exists, update it
      const updatedAvailability = await Availability.findOneAndUpdate(
        {}, // Match the first document
        { startDate, endDate }, // Update with new startDate and endDate
        { new: true } // Return the updated document
      );

      return res.status(200).send({
        success: true,
        message: "Tilgjengelighet oppdatert",
        availability: updatedAvailability,
      });
    }
  } catch (error) {
    console.error(`Error when setting availability: ${error.message}`);

    // 5. Handle Server Errors
    return res.status(500).send({
      success: false,
      message: "Serverfeil ved innstilling av tilgjengelighet",
      error: error.message,
    });
  }
};

export const getAvailability = async (req, res) => {
  try {
    const availability = await Availability.findOne();
    // if (!availability) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "No availability found",
    //   });
    // }

    return res.status(200).send({
      success: true,
      message: "Tilgjengelighet ble hentet",
      availability,
    });
  } catch (error) {
    console.log(`Server error when getting availability: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Serverfeil ved henting av tilgjengelighet",
    });
  }
};
