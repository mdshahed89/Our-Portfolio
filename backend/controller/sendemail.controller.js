import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import Admin from "../models/login.model.js";
const jwtSecret = "kbsdkfbuiusd237448973644382";
import bcrypt from "bcrypt";
export const sendEmail = async (req, res) => {
  const info = req.body;
  console.log(info);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "stgfbv@gmail.com",
      pass: "ryniwolefretazzt",
    },
  });

  const mailBody = {
    from: info.email,
    to: "robayatfarsit@gmail.com",
    subject: "New Submission Details",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Submission Details</h2>
        
        <p style="color: #555; font-size: 16px;">Hi [Name],</p>
        <p style="color: #555; font-size: 16px;">
          Below are the ${info?.path} details submitted by the user:
        </p>
  
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="text-align: left; padding: 8px; background-color: #007BFF; color: #fff;">Field</th>
            <th style="text-align: left; padding: 8px; background-color: #007BFF; color: #fff;">Details</th>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">First Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.firstName || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Last Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.lastName || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Email</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.email || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Phone</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.phone || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Budget</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.budget || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Company</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.firma || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Number of Pages</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.pages || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Flags</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.vlag?.join(", ") || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Description</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.description || "N/A"
            }</td>
          </tr>
        </table>
  
        ${
          info.image
            ? `<p style="color: #555; font-size: 16px;">Attached Images:</p>
               ${info.image}`
            : ""
        }
  
        <p style="color: #555; font-size: 16px;">Best regards,</p>
        <p style="color: #555; font-size: 16px; font-weight: bold;">Team Talentpeoples</p>
      </div>
    `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console(error);
      return res.status(500).send("Error sending email");
    } else {
      console.log(info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
};

export const sendLogoEmail = async (req, res) => {
  const info = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "stgfbv@gmail.com",
      pass: "ryniwolefretazzt",
    },
  });

  const mailBody = {
    from: info.email,
    to: "robayatfarsit@gmail.com",
    subject: "New Submission Details",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Submission Details</h2>
        
        <p style="color: #555; font-size: 16px;">Hi [Name],</p>
        <p style="color: #555; font-size: 16px;">
          Below are the ${info?.path} details submitted by the user:
        </p>
  
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="text-align: left; padding: 8px; background-color: #007BFF; color: #fff;">Field</th>
            <th style="text-align: left; padding: 8px; background-color: #007BFF; color: #fff;">Details</th>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">First Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.firstName || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Last Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.lastName || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Email</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.email || "N/A"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Phone</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.phone || "N/A"
            }</td>
          </tr>
         
         
          
         
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">Description</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
              info.description || "N/A"
            }</td>
          </tr>
        </table>
  
  
        <p style="color: #555; font-size: 16px;">Best regards,</p>
        <p style="color: #555; font-size: 16px; font-weight: bold;">Team Talentpeoples</p>
      </div>
    `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console(error);
      return res.status(500).send("Error sending email");
    } else {
      console.log(info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
};

export const sendResetEmail = async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "stgfbv@gmail.com",
      pass: "ryniwolefretazzt",
    },
  });
  const token = jwt.sign({ email }, jwtSecret, { expiresIn: "1h" });

  const resetLink = `http://localhost:3000/reset-password/${token}`;
  const mailBody = {
    from: `Team Talentpeoples <wdev520@gmail.com>`,
    to: email,
    subject: "Reset Password",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p style="color: #555; font-size: 16px;">Hi,</p>
      <p style="color: #555; font-size: 16px;">
        You requested to reset your password. Please click the button below to reset your password. This link will expire in 5 minutes.
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${resetLink}" 
           style="background-color: #035635; color: #fff; padding: 10px 20px; text-decoration: none; font-size: 16px;  display: inline-block;">
          Reset Password
        </a>
      </div>
      <p style="color: #555; font-size: 14px;">
        If you did not request this change, you can safely ignore this email.
      </p>
      <p style="color: #555; font-size: 14px;">Thanks, <br>Farsit</p>
    </div>
  `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console(error);
      return res.status(500).send("Error sending email");
    } else {
      console.log(info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
};

export const resetPassword = async (req, res) => {
  const { token, password, confirmPassword } = req.body;
  console.log({
    token,
    password,
    confirmPassword,
  });
  try {
    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }
    const decoded = jwt.verify(token, jwtSecret);
    const { email } = decoded;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await Admin.updateOne(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ message: "Links has been expired,please try again" });
  }
};
