const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/process-form', (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password'
    }
  });
  const mailOptions = {
    from: email,
    to: 'website-owner@example.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Error submitting form. Please try again later.');
    } else {
      res.status(200).send('Form submitted successfully!');
    }
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
