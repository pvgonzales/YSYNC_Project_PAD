import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Trainee from "../models/traineeSchema.js";

dotenv.config({
  path: "../.env",
});

const sendMailFunction = async (subject, body, recipients) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GEN_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_ACCOUNT,
      to: recipients,
      subject: subject,
      text: body,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: ", info.response);
  } catch (error) {
    console.error("An error has occurred while sending the email:", error);
  }
};
const mailer = (app) => {
  app.get("/api/google/sendMail", async (req, res) => {

    // In sending announcements, we can send emails to either all trainees, all resident members, or all people
    // TODO: we can implement this later on as well
    
    const trainees_info = await Trainee.find().populate({ path: "userId" });
    let recipients = [];
    trainees_info.forEach((trainee) => {
        recipients = [...recipients, trainee.userId.email];
    })
    console.log(recipients);

    // This block of code should handle on finding the announcements with its corresponding title and body

    // Uncomment this if you want to test certain emails
    // await sendMailFunction("Hello test email from JPAD", "This is a test email.", recipients);

    res
      .status(200)
      .send(`Emails sent successfully to ${recipients}. Check inbox.`);
  });
};

export default mailer;




// SAMPLE RECIPIENTS:
// let recipients = [
//     "pvgonzales@up.edu.ph",
//     "amocampo9@up.edu.ph",
//     "kvborja@up.edu.ph",
//     "dvmejorada@up.edu.ph",
//     "ljmacatangay@up.edu.ph",
//     "jlarias1@up.edu.ph",
//     "jlpena1@up.edu.ph",
//     "mmjavier5@up.edu.ph",
// ];