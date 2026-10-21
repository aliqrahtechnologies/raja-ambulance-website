import { Phone, MessageCircle, Star } from 'lucide-react';
import ServiceCard, { ServiceCardLarge } from '@/components/ServiceCard';
import CTAButtons from '@/components/CTAButtons';
import {
  ICU_FEATURED,
  SERVICE_CATEGORIES,
} from '@/data/siteData';

export default function Services() {
  return (
    <div className="premium-page">
      {/* Hero */}
      <section className="relative overflow-hidden premium-hero py-20 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emergency-50/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600 animate-fade-in-up">
            Our Services
          </span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Complete Care & Transportation Services
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            From ICU ambulance to funeral services, freezer box facilities, and
            air ambulance booking — explore everything we offer.
          </p>
        </div>
      </section>

      {/* Featured ICU */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emergency-100 px-4 py-1.5">
              <Star size={16} className="text-emergency-600 fill-emergency-600" />
              <span className="text-sm font-bold text-emergency-700 uppercase tracking-wider">
                Featured Service
              </span>
            </div>
          </div>
          <ServiceCardLarge service={ICU_FEATURED} />
        </div>
      </section>

      {/* Service categories */}
      {SERVICE_CATEGORIES.map((category, catIndex) => (
        <section
          key={category.id}
          className={`py-16 lg:py-20 ${
            catIndex % 2 === 0 ? 'bg-white/65' : 'bg-gradient-to-b from-primary-50/30 to-white/70'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4">
            {/* Category heading */}
            <div className="mb-10 flex items-center gap-4">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary-600 to-emergency-500" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-500">
                  Category {catIndex + 1}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-primary-900">
                  {category.heading}
                </h2>
              </div>
            </div>

            {/* Cards */}
            {category.id === 'air-ambulance' ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, i) => (
                    <div
                      key={service.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
                    >
                      <ServiceCard service={service} />
                    </div>
                  ))}
                </div>

                {/* CTA below air ambulance */}
                <div className="mt-12 rounded-3xl bg-gradient-to-r from-primary-900 to-primary-800 p-8 lg:p-10 text-center">
                  <h3 className="text-2xl font-extrabold text-white">
                    Need Air Ambulance Assistance?
                  </h3>
                  <p className="mt-2 text-white/70">
                    Our team is ready to help with booking and coordination.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:9894834101"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-600 to-emergency-700 px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                      >
                        <Phone size={20} strokeWidth={2.5} />
                        CALL NOW
                      </a>
                      <a
                        href={`https://wa.me/919894834101?text=${encodeURIComponent('Hello, I need air ambulance assistance. Please help me.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl hover:scale-105"
                      >
                        <MessageCircle size={20} strokeWidth={2.5} />
                        WHATSAPP US
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, i) => (
                  <div
                    key={service.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-emergency-600/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Ready to Book a Service?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Contact us through call or WhatsApp for quick assistance.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
