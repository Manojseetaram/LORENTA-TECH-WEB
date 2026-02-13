import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password, not your regular password
  },
});

export const senderEmail = process.env.EMAIL_USER;
export const receiverEmail = 'abhirocks.benachigere2005@gmail.com';