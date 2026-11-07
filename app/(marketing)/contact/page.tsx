import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="min-h-[80vh] bg-background px-6 py-20 text-foreground flex items-center justify-center">
      <div className="mx-auto max-w-md w-full bg-card border border-border p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Get in Touch</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Have questions about our plans? Fill out the form below and we&apos;ll get back to you.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium mb-1 block">Your Name</label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium mb-1 block">Email Address</label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>

          <Button type="submit" className="w-full mt-2">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}