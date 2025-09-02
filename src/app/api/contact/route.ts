import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const contactFormSchema = z.object({
	payload: z.object({
		name: z.string().min(1, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
		phone: z.string("Please enter a valid phone number"),
		message: z
			.string()
			.min(10, "Message must be at least 10 characters")
			.max(1000, "Message must be less than 1000 characters"),
		address: z.string(),
		service: z.string(),
	}),
});

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate request body with Zod
		const validationResult = contactFormSchema.safeParse(body);

		if (!validationResult.success) {
			const errors = validationResult.error.issues
				.map((err) => `${err.path.join(".")}: ${err.message}`)
				.join(", ");
			console.log(errors);

			return NextResponse.json({ error: `Validation failed: ${errors}` }, { status: 400 });
		}

		const {
			payload: { name, phone, address, message, service },
		} = validationResult.data;

		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: ["sinh.dev.ops@gmail.com"],
			subject: `Contact Form: ${phone}`,
			html: `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #f9fafb; border-radius: 10px; overflow: hidden; border: 1px solid #e5e7eb;">
    
    <!-- Header -->
    <div style="background: linear-gradient(90deg, #6366f1, #8b5cf6); padding: 20px; color: white; text-align: center;">
      <h2 style="margin: 0; font-size: 22px;">📩 New Contact Request</h2>
      <p style="margin: 5px 0 0; font-size: 14px;">Someone just reached out via your website</p>
    </div>

    <!-- Info Section -->
    <div style="padding: 20px; background: white;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 120px; color: #374151;">👤 Name</td>
          <td style="padding: 8px; color: #111827;">${name}</td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 8px; font-weight: bold; color: #374151;">📞 Phone</td>
          <td style="padding: 8px; color: #111827;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #374151;">📍 Address</td>
          <td style="padding: 8px; color: #111827;">${address}</td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 8px; font-weight: bold; color: #374151;">🛠 Service</td>
          <td style="padding: 8px; color: #111827;">${service}</td>
        </tr>
      </table>
    </div>

    <!-- Message Section -->
    <div style="padding: 20px; background: #f3f4f6; border-top: 1px solid #e5e7eb;">
      <h3 style="margin-top: 0; font-size: 16px; color: #111827;">💬 Message:</h3>
      <p style="margin: 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
    </div>

    <!-- Footer -->
    <div style="background: #111827; color: #9ca3af; text-align: center; padding: 15px; font-size: 12px;">
      <p style="margin: 0;">This message was sent from your website's contact form.</p>
      <p style="margin: 5px 0 0;">Reply directly to this email to contact <b>${name}</b>.</p>
    </div>

  </div>`,
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
		}

		return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 });
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
