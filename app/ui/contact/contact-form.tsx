"use client";
import { useState } from "react";

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("¡Mensaje enviado correctamente!");
        setForm({ name: "", email: "", subject: "", message: "" });
        if (onSubmit) onSubmit(form);
      } else {
        setError("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch {
      setError("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-gray-900/60 p-4 sm:p-8 rounded-2xl shadow-2xl border border-gray-800 mt-16"
    >
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Contáctanos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-gray-300 font-medium" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-300 font-medium" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-gray-300 font-medium" htmlFor="subject">
          Asunto
        </label>
        <input
          className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-300 font-medium" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-lime-400"
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>
      {success && (
        <div className="text-lime-400 font-medium text-center">{success}</div>
      )}
      {error && (
        <div className="text-red-400 font-medium text-center">{error}</div>
      )}
      <button
        type="submit"
        className="w-full bg-lime-400 text-black font-semibold py-3 rounded-md hover:bg-lime-300 transition-all duration-200 disabled:opacity-60 text-lg"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
