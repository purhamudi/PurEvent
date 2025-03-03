import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

export default function Section7() {
  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
        <Input placeholder="Your Name" className="w-full" />
        <Input type="email" placeholder="Your Email" className="w-full" />
        <Textarea placeholder="Your Message" className="w-full" />
        <Button className="w-full bg-brand-600 text-white">Send Message</Button>
      </form>
    </section>
  );
}