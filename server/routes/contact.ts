import { RequestHandler } from "express";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = contactSchema.parse(req.body);

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Nodemailer, etc.
    // 2. Save to a database
    // 3. Send to a webhook service like Zapier

    // For now, we'll just log it and return success
    console.log("Contact form submission:", validatedData);

    // In a real application, you might do something like:
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   subject: `Contact Form: ${validatedData.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Subject:</strong> ${validatedData.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `
    // });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
