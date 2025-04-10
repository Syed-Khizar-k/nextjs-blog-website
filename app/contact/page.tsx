import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Your Company Name",
  description:
    "Get in touch with us for inquiries, support, or feedback. We'd love to hear from you.",
  keywords: ["Contact", "Support", "Customer Service", "Blogifiers", "Help"],
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center text-base mb-12 max-w-2xl mx-auto">
        We'd love to hear from you. Whether you have a question, feedback, or
        just want to say hello, feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Type your message..."
              required
            />
          </div>

          <Button type="submit" className="w-full text-white">
            Send Message
          </Button>
        </form>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 shrink-0" />
            <div>
              <h3 className="text-base font-medium">Email</h3>
              <p className="text-sm">support@blogifiers.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 shrink-0" />
            <div>
              <h3 className="text-base font-medium">Phone</h3>
              <p className="text-sm">+92 (328) 0562360</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 shrink-0" />
            <div>
              <h3 className="text-base font-medium">Address</h3>
              <p className="text-sm ">A Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
