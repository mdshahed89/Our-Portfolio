import Review from "../models/review.model.js";
import cloudinary from "../utils/cloudinary.js";

export const addReview = async (req, res) => {
  try {
    const { name, image, rating, message, time, ref } = req.body;

    if (!name || !image || !rating || !message || !time) {
      return res.status(400).send({
        success: false,
        message: "Required fields are empty",
      });
    }

    let imageUrl = "";

    if (image) {
      const result = await cloudinary.uploader.upload(image, {
        folder: "SIDESONE",
      });
      imageUrl = result.secure_url;
    }

    if (!imageUrl) {
      return res.status(400).send({
        success: false,
        message: "Failed to upload image",
      });
    }

    const newReview = await Review.create({
      name,
      image: imageUrl,
      rating,
      message,
      time,
    });

    if (!newReview) {
      return res.status(400).send({
        success: false,
        message: "Failed to add new review",
      });
    }

    return res.status(201).json({
      success: true,
      data: newReview,
      message: "Review added successfully",
    });
  } catch (error) {
    console.log(`Error in add review controller: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { name, image, base64Img, rating, message, time, ref } = req.body;
    const { id } = req.params;

    if (!name || (!image && !base64Img) || !rating || !message || !time) {
      return res.status(400).send({
        success: false,
        message: "Required fields are empty",
      });
    }

    let imageUrl = "";

    if (base64Img) {
      const result = await cloudinary.uploader.upload(base64Img, {
        folder: "SIDESONE",
      });
      imageUrl = result.secure_url;
    }

    // if(!imageUrl){
    //   return res.status(400).send({
    //     success: false,
    //     message: "Failed to upload image"
    //   })
    // }

    const existingReview = await Review.findById(id);
    if (!existingReview) {
      return res.status(400).send({
        success: false,
        message: "Revies is not exist to update",
      });
    }

    existingReview.name = name;
    existingReview.image = imageUrl ? imageUrl : image;
    existingReview.rating = rating;
    existingReview.message = message;
    existingReview.time = time;

    const updatedReview = await existingReview.save();

    if (!updatedReview) {
      return res.status(400).send({
        success: false,
        message: "Failed to add new review",
      });
    }

    return res.status(201).json({
      success: true,
      data: updatedReview,
      message: "Review added successfully",
    });
  } catch (error) {
    console.log(`Error in add review controller: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).send({
      success: true,
      reviews,
      message: "Reviews fetched successfully",
    });
  } catch (error) {
    console.log(`Error in getReviews controller: ${error}`);
    return res.status(500).send({
      success: false,
      message: "Somethings went wrong",
      error: error.message,
    });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({
        success: false,
        message: "Failed to remove review",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Noe gikk galt under sletting av bestillingen.",
      error: error.message,
    });
  }
};
