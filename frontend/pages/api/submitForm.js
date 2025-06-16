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

  // Validar solo los campos requeridos (email es opcional)
  if (!floorType || !size || !name || !phone || !zipCode || !currentFloor) {
    console.error("Missing required fields:", req.body);
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    // 1️⃣ Enviar WhatsApp (Twilio)
    const { 
      TWILIO_ACCOUNT_SID, 
      TWILIO_AUTH_TOKEN, 
      TWILIO_WHATSAPP_NUMBER, 
      ADMIN_WHATSAPP_NUMBER 
    } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_NUMBER || !ADMIN_WHATSAPP_NUMBER) {
      throw new Error("Twilio configuration is incomplete.");
    }

    const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    const message = await twilioClient.messages.create({
      from: TWILIO_WHATSAPP_NUMBER,
      to: ADMIN_WHATSAPP_NUMBER,
      body: `📩 New Quote Request:
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Floor Type: ${floorType}
Size: ${size}
Current Floor: ${currentFloor}
ZIP Code: ${zipCode}`,
    });

    console.log("✅ Twilio WhatsApp message SID:", message.sid);

    // 2️⃣ Enviar correo al admin
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Quote Request" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Flooring Quote Request",
      text: `🧾 New Quote Details:

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Floor Type: ${floorType}
Size: ${size}
Current Floor: ${currentFloor}
ZIP Code: ${zipCode}`,
    });

    // 3️⃣ (Opcional) Enviar correo de confirmación al cliente si dio email
    if (email) {
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

Best regards,  
A's Flooring Team`,
      });
    }

    return res.status(200).json({ message: "Quote submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quote:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
}
