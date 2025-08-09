"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Instantiate Resend lazily to avoid build/runtime crashes when the API key is absent
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500) || typeof senderEmail !== 'string') {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000) || typeof message !== 'string') {
    return {
      error: "Invalid message",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      error: "Missing RESEND_API_KEY on server",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hsualexotake@gmail.com",
      subject: "Portfolio Website contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
