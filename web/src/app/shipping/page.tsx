import { SITE_CONFIG } from "@/types";

export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-serif font-bold text-earth-900 mb-8">Shipping & Returns</h1>

      <div className="space-y-8 text-earth-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-earth-900 mb-3">Shipping</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard shipping: ${SITE_CONFIG.shipping.standardRate} (5–10 business days)</li>
            <li>Express shipping: ${SITE_CONFIG.shipping.expressRate} (2–4 business days)</li>
            <li>Free standard shipping on orders over ${SITE_CONFIG.shipping.freeThreshold}</li>
            <li>International shipping available to 50+ countries</li>
            <li>Each item is carefully packaged in eco-friendly materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-earth-900 mb-3">Returns & Exchanges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>30-day return policy on all items in original condition</li>
            <li>Free return shipping for defective or damaged items</li>
            <li>Custom or personalized items are final sale unless defective</li>
            <li>Refunds processed within 5–7 business days of receiving the return</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-earth-900 mb-3">Handmade Variance</h2>
          <p>
            Because every item is handcrafted, slight variations in color, size, and texture
            are natural and part of what makes each piece unique. These variations are not
            considered defects and are not eligible for return unless they significantly differ
            from the product description.
          </p>
        </section>
      </div>
    </div>
  );
}
