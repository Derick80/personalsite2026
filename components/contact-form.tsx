"use client";
import { sendContactEmail } from "@/app/actions/about";
import { useActionState } from "react";
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
  return (
    <form id="Contact" className="space-y-4  max-w-2xl mx-auto mt-6" action={action}>
      <p className="text-primary italic">Contact me via Email</p>
      <input type="hidden" name="shield" value="" />
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
