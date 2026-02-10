"use client";
import { sendContactEmail } from "@/app/actions/about";
import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  name: "",
  from: "",
  message: "",
};

const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  useEffect(() => {
    // Simple JS check: bot likely won't execute this or won't find the field if not rendering fully
    const nonceElement = document.getElementById("nonce") as HTMLInputElement;
    if (nonceElement) {
      nonceElement.value = "human";
    }
  }, []);

  return (
    <form id="Contact" className="space-y-4  max-w-2xl mx-auto mt-6" action={action}>
      <p className="text-primary italic">Contact me via Email</p>
      {/* Honeypot field - should be left empty by humans */}
      <input
        type="text"
        name="confirm_email"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      {/* Nonce field - populated by JS to prove client-side execution */}
      <input type="hidden" name="nonce" id="nonce" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="mb-2">
            Email
          </Label>
          <Input
            id="from"
            name="from"
            placeholder="Enter your email"
            type="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
        />
      </div>
      <Button className="w-full" disabled={isPending} type="submit">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
