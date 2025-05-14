const nodemailer = require("nodemailer");

const sendResetEmail = async (to, resetLink) => {
  console.log("Email:", process.env.BREVO_EMAIL);
  console.log("SMTP Key:", process.env.BREVO_SMTP_KEY ? "Exists" : "Missing");

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_EMAIL,
      pass: process.env.BREVO_SMTP_KEY,
    },
  });

  const mailOption = {
    from: `"Banglore Site Support"  <charan.r7760@gmail.com>`,
    to,
    subject: "Password Reset - Banglore Site App",
    html: `
        <h3>Password Reset Request</h3> 
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link expires in 15 minutes.</p>
    `,
  };
  await transporter.sendMail(mailOption);
};

module.exports = sendResetEmail;
