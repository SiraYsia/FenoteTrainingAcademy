const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file



// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});



// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/contactus', (req, res) => {
  res.sendFile(__dirname + '/public/contactus.html');
});
// Handle form submission
app.post('/submit-form', (req, res) => {
  // Extract form data from the request body
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    // Return a 400 Bad Request status for validation failure
    return res.status(400).send('Invalid form data. All fields are required.');
  }

  
  // Log the form data to the console
  console.log('Form submitted:', { name, email, subject, message });

  // Create an email message
  const mailOptions = {
    from: 'formsubmissionsnotifier@gmail.com', // Replace with your Gmail email address
    to: 'ftrainingacademy21@gmail.com', // Replace with your business email address
    subject: `New Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);

      // Render a thank-you message and link to go back home
      res.send(`
        <h1>Thank you for your message!</h1>
        <p>We will get back to you as soon as we can.</p>
        <a href="/">Go back home</a>
      `);
    }
  });
});







// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




