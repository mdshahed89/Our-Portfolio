import Availability from "../models/availability.modal.js";

export const setAvailability = async (req, res) => {
  const { dateAndTime } = req.body;

  try {
    if (!dateAndTime) {
      return res.status(400).send({
        success: false,
        message: "Date & Time is required",
      });
    }

    const existData = await Availability.find();
    if (!existData) {
      const availability = new Availability({
        dateAndTime,
      });

      if (!availability) {
        return res.status(400).send({
          success: false,
          message: "Failed to save availability data",
        });
      }
      return res.status(201).send({
        success: true,
        message: "Availability set successfully",
        availability,
      });
    } else {
      try {
        const updatedAvailability = await Availability.findOneAndUpdate(
          {}, 
          { dateAndTime }, 
          { new: true } 
        );

        return res.status(200).send({
          success: true,
          message: "Availability updated successfully",
          availability: updatedAvailability,
        });
      } catch (error) {
        console.log(`Server error when updating availability: ${error}`);
        return res.status(400).send({
          success: false,
          message: "Failed to update availability data",
        });
      }
    }
  } catch (error) {
    console.log(`Server error when setting availability: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Server Error when setting availability",
    });
  }
};


export const getAvailability = async (req, res) => {
    try {
        const availability = await Availability.findOne()
        return res.status(200).send({
            success: true,
            message: "Availability fetched successfully",
            availability
        })
        
    } catch (error) {
        console.log(`Server error when getting availability: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Server Error when getting availability",
    });
    }
}
