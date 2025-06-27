import { ContactForm } from "@/app/ui/contact/contact-form";
import type { Metadata } from "next";
import Navigation from "@/app/ui/welcome/nav";

export const metadata: Metadata = {
  title: "Contacto | DashPilot",
  description: "Formulario de contacto para consultas y soporte.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center py-20 px-4">
        <header>
            <Navigation/>
        </header>
      <ContactForm />
    </main>
  );
}
