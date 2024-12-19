import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import Admin from "../models/login.model.js";
const jwtSecret = "kbsdkfbuiusd237448973644382";

export const adminData = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await Admin.findOne({ email });

  if (!user) {
    return res.status(404).send({ message: "Wrong Email" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(404).send({ message: "Wrong password" });
  }
  const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, {
    expiresIn: "1h",
  });
  console.log(user.name);
  res.status(200).send({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};
