import { SITE_CONFIG } from "@/types";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-serif font-bold text-earth-900 mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-earth-600 leading-relaxed text-sm">
        <p>Last updated: July 2026</p>

        <section>
          <h2 className="text-lg font-semibold text-earth-900 mb-2">Information We Collect</h2>
          <p>
            When you use {SITE_CONFIG.name}, we collect information you provide directly
            (name, email, shipping address, payment details) and usage data (pages visited,
            products viewed, device information) to improve your shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-earth-900 mb-2">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to customer service requests</li>
            <li>Improve our website and product offerings</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-earth-900 mb-2">Data Security</h2>
          <p>
            We use industry-standard encryption (TLS/SSL) for all data transmission.
            Payment information is processed by Stripe and never stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-earth-900 mb-2">Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-700 hover:underline">
              {SITE_CONFIG.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
