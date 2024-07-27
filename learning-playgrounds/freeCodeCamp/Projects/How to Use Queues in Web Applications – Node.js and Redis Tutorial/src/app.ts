// Import necessary modules
import express from "express"; // Import Express.js module for creating a web application
import bodyParser from "body-parser"; // Import module for parsing JSON request bodies
import nodemailer from "nodemailer"; // Import module for sending emails
import Bull, { Job } from "bull"; // Import module for creating queues

// Create an instance of the Express application
const app = express();

// Use the bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Create a new queue named "email" using Bull and connect it to the Redis server
const emailQueue = new Bull("email", {
  redis: "localhost:6379",
});

// Define the type for the email object
type EmailType = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

// Function to send a new email
const sendNewEmail = async (email: EmailType) => {
  // Add the email to the email queue for processing
  emailQueue.add({ ...email });
};

// Function to process emails from the email queue
const processEmailQueue = async (job: Job) => {
  // Create a test email account for sending the email
  const testAccount = await nodemailer.createTestAccount();

  // Create a transporter to send the email using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Extract the necessary information from the email job data
  const { from, to, subject, text } = job.data;

  // Log the email recipient
  console.log("Sending mail to %s", to);

  // Send the email using the transporter
  let info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html: `<strong>${text}</strong>`,
  });

  // Log the message ID and preview URL of the sent email
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

// Start processing emails from the email queue
emailQueue.process(processEmailQueue);

// Define an endpoint for sending an email
app.post("/send-email", async (req, res) => {
  // Extract the necessary information from the request body
  const { from, to, subject, text } = req.body;

  // Call the sendNewEmail function to add the email to the email queue
  await sendNewEmail({ from, to, subject, text });

  // Log that the email has been added to the queue
  console.log("Added to queue");

  // Send a JSON response indicating successful email submission
  res.json({
    message: "Email Sent",
  });
});

// Start the server on port 4300
app.listen(4300, () => {
  console.log("Server started at http://localhost:4300");
});
