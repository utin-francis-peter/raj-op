import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  try {
    const {
      senderFirstName,
      senderLastName,
      senderEmail,
      senderPhone,
      senderMessage,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: "u.francispeter@gmail.com",
      to: "sales@rajhousinggoa.com",
      subject: `Raj Enquiry from ${senderFirstName + " " + senderLastName}`,
      html: `
      <div>
        <p>${senderMessage}</p>
        <h4>Sender's mail: ${senderEmail} </h4>
        <h4>Sender's phone: ${senderPhone} </h4>
      </div> `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `failed to Send Email => ${error.message}` },
      { status: 500 }
    );
  }
};
