import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import Admin from "../models/login.model.js";
const jwtSecret = "kbsdkfbuiusd237448973644382";
import bcrypt from "bcryptjs";
export const sendEmail = async (req, res) => {
  const info = req.body;
  console.log(info);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SIDESONE_EMAIL,
      pass: process.env.SIDESONE_EMAIL_PASS,
    },
  });

  const mailBody = {
    from: process.env.SIDESONE_EMAIL,
    to: process.env.SIDESONE_EMAIL,
    subject: "Ny Innlevering Detaljer",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">Ny ${
          info.path
        } Innlevering Detaljer</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; font-weight: bold;">Navn</td>
            
          </tr>
          <tr style="background-color: #ffffff;">
          <td style="padding: 8px;">${info.firstName || "N/A"} ${
      info.lastName || ""
    }</td>    
          </tr>
          
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f2f2f2;">E-post</td>
            
          </tr>
          <tr style="background-color: #ffffff;">
         <td style="padding: 8px;">${info.email || "N/A"}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; font-weight: bold;">Telefon</td>
           
          </tr>
          <tr style="background-color: #ffffff;">
          <td style="padding: 8px;">${info.phone || "N/A"}</td>
            
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f2f2f2;">Firma</td>
           
          </tr>
          <tr style="background-color: #ffffff;">
           <td style="padding: 8px;">${info.firma || "N/A"}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; font-weight: bold;">Budget</td>
           
          </tr>
          <tr style="background-color: #ffffff;">
           <td style="padding: 8px;">${info.budget || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f2f2f2;">${
              info.path === "/nettbuttik" ? "Antal produkter" : "Antal sider"
            }</td>
            
          </tr>
          <tr style="background-color: #ffffff;">
         <td style="padding: 8px;">${info.pages || "N/A"}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; font-weight: bold;">Valg</td>
           
          </tr>
          <tr style="background-color: #ffffff;">
           <td style="padding: 8px;">
              <ul style="margin: 0; padding-left: 16px; list-style-type: disc;">
                ${
                  info.vlag
                    ? info.vlag.map((item) => `<li>${item}</li>`).join("")
                    : "<li>N/A</li>"
                }
              </ul>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f2f2f2;">Hvis du har bilder eller logo kan du laste de opp her</td>
           
          </tr>
          <tr style="background-color: #ffffff;">
          <td style="padding: 8px;">
              ${
                info.image
                  ? `<a href="${info.image}" target="_blank" style="color: #007BFF;">Last opp bilde</a>`
                  : "N/A"
              }
            </td> 
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; font-weight: bold;">Beskriv hvordan du ønsker at nettsiden din skal være</td>
           
          </tr>
          <tr style="background-color: #ffffff;">
           <td style="padding: 8px;">${info.description || "N/A"}</td>
          </tr>
        </table>
        
        <p style="color: #555; font-size: 14px;">Best regards,</p>
      
      </div>
    `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Feil ved sending av e-post");
    } else {
      console.log(info.response);
      return res.status(200).send("Email sent successfully!");
    }
  });
};

export const sendLogoEmail = async (req, res) => {
  const info = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SIDESONE_EMAIL,
      pass: process.env.SIDESONE_EMAIL_PASS,
    },
  });

  const mailBody = {
    from: `${info?.firstName} ${info?.lastName} ${process.env.SIDESONE_EMAIL}`,
    to: process.env.SIDESONE_EMAIL,
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
     
      </div>
    `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Feil ved sending av e-post");
    } else {
      console.log(info.response);
      return res.status(200).send("Email sent successfully!");
    }
  });
};

export const sendResetEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SIDESONE_EMAIL,
      pass: process.env.SIDESONE_EMAIL_PASS,
    },
  });
  const token = jwt.sign({ email }, jwtSecret, { expiresIn: "1h" });

  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;
  const mailBody = {
    from: process.env.SIDESONE_EMAIL,
    to: email,
    subject: "Glem passord",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p style="color: #555; font-size: 16px;">Hi,</p>
      <p style="color: #555; font-size: 16px;">
       Du ba om å tilbakestille passordet ditt. Klikk på knappen nedenfor for å tilbakestille passordet ditt. Denne lenken utløper om 5 minutter.
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${resetLink}" 
           style="background-color: #035635; color: #fff; padding: 10px 20px; text-decoration: none; font-size: 16px;  display: inline-block;">
          Reset Password
        </a>
      </div>
      <p style="color: #555; font-size: 14px;">
        
Hvis du ikke har bedt om denne endringen, kan du trygt ignorere denne e-posten.
      </p>
      <p style="color: #555; font-size: 14px;">Thanks
    </div>
  `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Feil ved sending av e-post");
    } else {
      console.log(info.response);
      return res.status(200).send("Email sent successfully!");
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
      return res.status(400).send({ message: "Passord stemmer ikke" });
    }
    const decoded = jwt.verify(token, jwtSecret);
    const { email } = decoded;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await Admin.updateOne(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    console.log(result);
    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(400).send({ message: "Linker er utløpt, prøv igjen" });
  }
};

export const changePassword = async (req, res) => {
  const { oldEmail, password, newEmail, confirmPassword, name } = req.body;
  console.log({
    oldEmail,
    password,
    newEmail,
    confirmPassword,
    name,
  });

  const admin = await Admin.findOne({ email: oldEmail });

  if (!admin) {
    return res.status(400).send({ message: "Finner ikke e-post" });
  }
  if (password !== confirmPassword) {
    return res.status(400).send({ message: "Passord stemmer ikke" });
  }
  const isPasswordMatch = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatch) {
    return res.status(404).send({ message: "Feil passord" });
  }

  try {
    const updatedAdmin = await Admin.updateOne(
      { email: oldEmail },
      { $set: { email: newEmail, name: name } }
    );

    console.log(updatedAdmin);
    return res.status(200).send(updatedAdmin);
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .send({ message: "Noe gikk galt. Vennligst prøv igjen" });
  }
};
