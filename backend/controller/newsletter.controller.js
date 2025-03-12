import Newsletter from "../models/newsletter.modal.js";

export const createNewsletter = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).send({
        success: false,
        message: "Name and email is required",
      });
    }

    const newNewsletter = await Newsletter.create({
      name,
      email,
    });

    if (!newNewsletter) {
      return res.status(400).send({
        success: false,
        message: "Failed to create new newsletter",
      });
    }

    return res.status(201).json({
      success: true,
      data: newNewsletter,
      message: "Newsletter created successfully",
    });
  } catch (error) {
    console.log(`Error in create newsletter controller: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};


export const getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    return  res.status(200).send({
      success: true,
      newsletter: newsletters,
      message: "Newsletter fetched successfully",
    });
  } catch (error) {
    console.log(`Error in getNewsletters controller: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};


export const deleteNewsletter = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNewsletter = await Newsletter.findByIdAndDelete(id);

    if (!deletedNewsletter) {
      return res.status(404).json({
        success: false,
        message: "Failed to remove newsletter",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Newsletter deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt under sletting av bestillingen.",
      error: error.message,
    });
  }
};