import axios from "axios";
const cloudName = "dervoi2c1";
const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images_preset");

    const res = await axios.post(api, formData);
    return res.data.secure_url;
  } catch (error) {
    console.log("Error uploading file:", error);
    throw new Error("Failed to upload image.");
  }
};
