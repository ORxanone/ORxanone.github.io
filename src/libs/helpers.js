export const emailConfiguration = {
  service: "Gmail",
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_PASSWORD,
  },
  tls: {
    rejectUnauthorized:
      process.env.REJECT_UNAUTHORIZED == "false" ? false : true, // Set to true in production
  },
  connectionTimeout: 5000,
};


import nodemailer from 'nodemailer'


// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
}

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  const { from, ...rest } = data

  return await transporter.sendMail({
    from: from || process.env.SMTP_FROM_EMAIL,
    ...rest,
  })
}
