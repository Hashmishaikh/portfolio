import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Validate environment variables on startup
dotenv.config();

export const contactUs = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create reusable transporter
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send mail
        await transporter.sendMail({
            from: `"Portfolio Contact: ${subject || 'New Submission'}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: subject || "New Contact Form Submission",
            html: `
                <div style="font-family: sans-serif; padding: 20px; background: #f5f5f5;">
                    <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #333;">New Message from Portfolio</h2>
                        <p><strong>From:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                        <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
};