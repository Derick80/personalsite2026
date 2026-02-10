"use server";
import { redirect } from "next/navigation";
import { z } from "zod";


// TODO document this function
const schema = z.object({
  from: z.string().email("Invalid email address"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(20, "Name must be at most 20 characters long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
  confirm_email: z.string().max(0),
  nonce: z.string().min(1),
});
const apiKey = process.env.AUTH_RESEND_KEY;
if (!apiKey) {
  throw new Error("RESEND_API_KEY is not set");
}

type aboutEmailType = z.infer<typeof schema>;

export async function sendContactEmail(
  prevState: Record<string, unknown>,
  formData: FormData,
) {
  // const resend = new Resend(process.env.RESEND_API_KEY)
  const validatedFields = schema.safeParse({
    from: formData.get("from"),
    name: formData.get("name"),
    message: formData.get("message"),

    confirm_email: formData.get("confirm_email"),
    nonce: formData.get("nonce"),
  });
  if (!validatedFields.success) {
    return {
      message: validatedFields.error?.flatten().fieldErrors,
    };
  }
  const { from, name, message, confirm_email, nonce } = validatedFields.data;

  // Spam check
  if (confirm_email !== "" || nonce !== "human") {
    return {
      message: "Invalid form submission",
    };
  }

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "no-reply@derickhoskinson.com",

      name: name,
      to: "derickchoskinson@gmail.com",
      subject: `Contact from ${from}`,
      html: `<p>${message}</p>`,
      text: message,
    }),
  });
  if (!result.ok) {
    throw new Error("Resend error: " + JSON.stringify(await result.json()));
  }
  redirect("/");
}
