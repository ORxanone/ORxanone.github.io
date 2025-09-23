import { emailConfiguration, sendEmail } from "@/libs/helpers";
import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Only POST requests are allowed" });
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body);

    const result = await sendEmail({
      to: 'orxanracabov@gmail.com',
      subject: "Subscriber",
      html: `
                <p>
                  Email: <a href="mailto:${email}">${email}</a>.  <br/>
                  Name: ${name}  <br/> <br/>
                  Subject: ${subject} <br/> <br/>
                  Message: ${message} <br/> <br/>
                </p>
              `,
    });
    res.status(201).json({ msg: "Success" });
  } catch (error) {
    console.error("error in sending contact email: ", error);
    res.status(500).json({ msg: "Failed" });
  }
};
