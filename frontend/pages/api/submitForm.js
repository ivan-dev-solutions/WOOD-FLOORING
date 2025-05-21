import nodemailer from "nodemailer";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { floorType, size, name, email, phone, zipCode, currentFloor } = req.body;

  console.log("Received Data:", req.body); // Debugging log

  // Check if any field is missing
  if (!floorType || !size || !name || !email || !phone || !zipCode || !currentFloor) {
    console.error("Missing required fields:", req.body);
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // 📌 1️⃣ Send WhatsApp Message (Twilio)
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      throw new Error("Twilio credentials missing.");
    }
    if (!process.env.TWILIO_WHATSAPP_NUMBER || !process.env.ADMIN_WHATSAPP_NUMBER) {
      throw new Error("Twilio phone numbers missing.");
    }

    const twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const message = await twilioClient.messages.create({
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: process.env.ADMIN_WHATSAPP_NUMBER,
    body: `New Quote Request:
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Floor Type: ${floorType}
    Size: ${size}
    Current Floor: ${currentFloor}
    ZIP Code: ${zipCode}`,
});

console.log("✅ Twilio WhatsApp message SID:", message.sid);
console.log("📤 Message status:", message.status);
console.log("🧾 Full message object:", message);


    // 📌 2️⃣ Send Email to Admin
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Set to true if using port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Quote Request" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Flooring Quote Request",
      text: `You have received a new quote request.

      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Floor Type: ${floorType}
      Size: ${size}
      Current Floor: ${currentFloor}
      ZIP Code: ${zipCode}`,
    });

    // 📌 3️⃣ Send Confirmation Email to Client
    await transporter.sendMail({
      from: `"A's Flooring" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Quote Request Confirmation",
      text: `Hello ${name}, 

Thank you for requesting a flooring quote with A's Flooring! 

We have received your request for:
- Floor Type: ${floorType}
- Size: ${size}
- Current Floor Condition: ${currentFloor}
- ZIP Code: ${zipCode}

Our team will contact you shortly.

Best Regards, 
A's Flooring Team`,
    });

    return res.status(200).json({ message: "Quote submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quote:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
}
