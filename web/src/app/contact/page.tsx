"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/types";
import { buttonVariants } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-earth-900 mb-4">Get in Touch</h1>
        <p className="text-earth-600 max-w-xl mx-auto">
          Have a question about an order, interested in becoming an artisan partner,
          or just want to say hello? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-100 rounded-lg">
              <Mail className="w-5 h-5 text-brand-700" />
            </div>
            <div>
              <h3 className="font-semibold text-earth-900">Email</h3>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-700 hover:underline">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-100 rounded-lg">
              <Phone className="w-5 h-5 text-brand-700" />
            </div>
            <div>
              <h3 className="font-semibold text-earth-900">Phone</h3>
              <p className="text-earth-600">{SITE_CONFIG.phone}</p>
              <p className="text-sm text-earth-500">Mon–Fri, 9am–6pm EST</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-100 rounded-lg">
              <MapPin className="w-5 h-5 text-brand-700" />
            </div>
            <div>
              <h3 className="font-semibold text-earth-900">Studio</h3>
              <p className="text-earth-600">{SITE_CONFIG.address}</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <Send className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h2>
            <p className="text-green-700">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-earth-100 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1">Name</label>
              <input id="name" required className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1">Email</label>
              <input id="email" type="email" required className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-earth-700 mb-1">Subject</label>
              <select id="subject" className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Become an Artisan</option>
                <option>Press & Media</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1">Message</label>
              <textarea id="message" rows={5} required className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <button type="submit" className={buttonVariants({ size: "lg", className: "w-full" })}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
