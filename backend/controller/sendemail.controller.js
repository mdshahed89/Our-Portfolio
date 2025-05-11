import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import Admin from "../models/login.model.js";
const jwtSecret = "kbsdkfbuiusd237448973644382";
import bcrypt from "bcryptjs";
import cloudinary from "../utils/cloudinary.js";

export const sendEmail = async (req, res) => {
  const info = req.body;

  const images = info.images;

  let uploadedImages = [];

  if (Array.isArray(images) && images.length > 0) {
    uploadedImages = await Promise.all(
      images.map(async (image) => {
        if (image.startsWith("data:image")) {
          const result = await cloudinary.uploader.upload(image, {
            folder: "SIDESONE",
            resource_type: "image",
            overwrite: false,
          });
          return result.secure_url;
        }
        return null;
      })
    );

    uploadedImages = uploadedImages.filter((url) => url !== null);
  }

  // console.log(uploadedImages);

  // console.log(info);
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
        <h3 style="color: #333; text-align: center;">Ny ${
          info.path
        } Innlevering Detaljer</h3>
        
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
    Array.isArray(uploadedImages) && uploadedImages.length > 0
      ? uploadedImages
          .map(
            (link, index) =>
              `<a href="${link}" target="_blank" style="color: #007BFF; ">
bilder ${index + 1}</a>`
          )
          .join(", ")
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

export const sendChatbotDataMail = async (req, res) => {
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
    from: process.env.SIDESONE_EMAIL,
    to: process.env.SIDESONE_EMAIL,
    // to: "r2scoder@gmail.com",
    subject: "Ny chatbot-forespørsel",
    replyTo: info?.email,
    html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border-radius: 10px; background-color: #ffffff; color: #ffffff; border: 1px solid #3ddc91;">
    <h2 style="color: #035635; text-align: center; margin-bottom: 24px; font-size: 28px;">Ny chatbot-forespørsel</h2>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Navn:</strong>
      <span style="color: #000000;">${info?.name}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">E-post:</strong>
      <span style="color: #000000;">${info?.email}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Telefon:</strong>
      <span style="color: #000000;">${info?.phone}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Melding:</strong>
      <span style="color: #000000;">${info?.message}</span>
    </div>

    <hr style="margin: 24px 0; border: none; border-top: 1px solid #035635;" />

    <p style="font-size: 14px; color: #035635;">Vennlig hilsen,</p>
    <p style="font-size: 14px; color: #035635;">${info?.name}</p>
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

export const sendSEODataMail = async (req, res) => {
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
    from: process.env.SIDESONE_EMAIL,
    to: process.env.SIDESONE_EMAIL,
    // to: "r2scoder@gmail.com",
    subject: "Ny forespørsel om markedsføringstjenester",
    replyTo: info?.email,
    html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border-radius: 10px; background-color: #ffffff; color: #ffffff; border: 1px solid #3ddc91;">
    <h2 style="color: #035635; text-align: center; margin-bottom: 24px; font-size: 28px;">Ny forespørsel om markedsføringstjenester</h2>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Pakkenavn:</strong>
      <span style="color: #000000;">${info?.packageName}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Pakkepris:</strong>
      <span style="color: #000000;">${info?.packagePrice}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Navn:</strong>
      <span style="color: #000000;">${info?.name}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">E-post:</strong>
      <span style="color: #000000;">${info?.email}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Telefon:</strong>
      <span style="color: #000000;">${info?.phone}</span>
    </div>

    <div style="margin-bottom: 12px; display: flex;">
      <strong style="width: 90px; color: #035635;">Melding:</strong>
      <span style="color: #000000;">${info?.message}</span>
    </div>

    <hr style="margin: 24px 0; border: none; border-top: 1px solid #035635;" />

    <p style="font-size: 14px; color: #035635;">Vennlig hilsen,</p>
    <p style="font-size: 14px; color: #035635;">${info?.name}</p>
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
        <h3 style="color: #333; text-align: center;">New Submission Details</h3>
        
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
      <h3 style="color: #333;">Password Reset Request</h3>
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

export const sendContactEmai = async (req, res) => {
  const { name, email, message } = req.body;

  // console.log(uploadedImages);

  // console.log(info);
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
    subject: "Ny kontaktskjema-innsending",
    text: `Du har mottatt en ny melding via kontaktskjemaet.
  
    Navn: ${name}
    E-post: ${email}
    Melding:
    ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #28a745; border-radius: 8px;">
        <h2 style="background-color: #28a745; color: #fff; padding: 10px; text-align: center; border-radius: 5px;">Ny melding fra kontaktskjema</h2>
        <p style="font-size: 16px;"><strong>Navn:</strong> ${name}</p>
        <p style="font-size: 16px;"><strong>E-post:</strong> <a href="mailto:${email}" style="color: #28a745; text-decoration: none;">${email}</a></p>
        <p style="font-size: 16px;"><strong>Melding:</strong></p>
        <p style="background-color: #e6f4ea; padding: 10px; border-radius: 5px; font-style: italic;">${message}</p>
        <hr>
        <p style="text-align: center; font-size: 14px; color: #666;">Denne e-posten ble sendt fra kontaktskjemaet på nettsiden din.</p>
      </div>
    `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({
        success: true,
        message: "Failed to send email",
      });
    } else {
      console.log(info.response, "email sent successfully");
      return res.status(200).send({
        success: true,
        message: "Email sent successfully!",
      });
    }
  });
};

export const sendChatbotMail = async (req, res) => {
  const { email, message, chatHistory } = req.body;

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
    // to: ["r2scoder@gmail.com"],
    replyTo: email,
    subject: "Ny melding fra chatbot",
    text: `Du har mottatt en ny melding fra chatboten.

    E-post: ${email}

    Melding:
    ${message}

    Chatloggen:
    ----------------------
    ${chatHistory.join("\n")}
    ----------------------

    Vennligst følg opp denne forespørselen så snart som mulig.
    `,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #28a745; border-radius: 8px;">
        <h2 style="background-color: #28a745; color: #fff; padding: 10px; text-align: center; border-radius: 5px;">Ny melding fra chatbot</h2>
        
        <p style="font-size: 16px;"><strong>E-post:</strong> <a href="mailto:${email}" style="color: #28a745; text-decoration: none;">${email}</a></p>
        
        <p style="font-size: 16px;"><strong>Melding:</strong></p>
        <p style="background-color: #e6f4ea; padding: 10px; border-radius: 5px; font-style: italic;">${message}</p>
        
        <h3 style="margin-top: 20px;">🗨 Chatloggen</h3>
        <div style="background-color: #f8f9fa; padding: 10px; border-radius: 5px; font-size: 14px;">
        ${chatHistory.join("<br>")}
        </div>
        
        <hr>
        <p style="text-align: center; font-size: 14px; color: #666;">Denne e-posten ble sendt automatisk fra chatboten på nettsiden din.</p>
      </div>
    `,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({
        success: true,
        message: "Failed to send email",
      });
    } else {
      console.log(info.response, "Chatbot email sent successfully");
      return res.status(200).send({
        success: true,
        message: "Chatbot mail sent successfully!",
      });
    }
  });
};
