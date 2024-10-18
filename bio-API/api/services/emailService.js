const nodemailer = require('nodemailer');

async function sendEmail(name, email, message) {
    
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.API_EMAIL_USER, // Το email σου
      pass: process.env.API_EMAIL_PASSWORD, // Ο κωδικός σου
    },
  });

  const mailOptions = {
    from: email, // Email αποστολέα
    to: process.env.API_EMAIL_SEND_TO, // Ο παραλήπτης
    subject: `New message from ${name}`,
    text: message,
  };

  // Αποστολή του email
  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error('Failed to send email');
  }
}

module.exports = {
  sendEmail,
};
