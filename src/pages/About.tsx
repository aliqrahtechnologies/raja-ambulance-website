import {
  Ambulance,
  Heart,
  Truck,
  Plane,
  Snowflake,
  Users,
  Shield,
  Clock,
} from 'lucide-react';
import CTAButtons from '@/components/CTAButtons';

const SERVICES_SUMMARY = [
  { icon: Ambulance, title: 'Ambulance Services', desc: 'Emergency and non-emergency patient transportation.' },
  { icon: Heart, title: 'Patient Transportation', desc: 'Safe and comfortable transport with AC and Non-AC options.' },
  { icon: Users, title: 'Funeral Services', desc: 'Dignified funeral arrangements and ratham services.' },
  { icon: Snowflake, title: 'Freezer Box Services', desc: 'Cold storage and freezer box support for preservation.' },
  { icon: Plane, title: 'Air Ambulance Booking', desc: 'Assistance with air ambulance booking and documentation.' },
  { icon: Truck, title: 'Transportation Support', desc: 'Vehicle options including EEGO and Tempo Traveller.' },
];

const VALUES = [
  { icon: Heart, title: 'Compassion', desc: 'We treat every patient and family with empathy and respect.' },
  { icon: Clock, title: 'Availability', desc: 'Our services are available 24 hours, 7 days a week.' },
  { icon: Shield, title: 'Reliability', desc: 'Professional and dependable service when it matters most.' },
];

export default function About() {
  return (
    <div className="premium-page">
      {/* Hero */}
      <section className="relative overflow-hidden premium-hero py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emergency-50/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600 animate-fade-in-up">
            About Us
          </span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            RAJA AMBULANCE
          </h1>
          <p className="mt-3 text-xl font-bold text-emergency-600 tracking-wide animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            YOU ARE IN GOOD HANDS
          </p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Dedicated to providing reliable ambulance, funeral, and support
            services to our community with professionalism and care.
          </p>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-premium-lg aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/5364345/pexels-photo-5364345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="RAJA Ambulance fleet ready for service"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-white shadow-premium-lg p-5 ring-1 ring-primary-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emergency-100">
                    <Clock size={26} className="text-emergency-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-extrabold text-primary-900 text-lg">24/7</div>
                    <div className="text-xs text-gray-500">Always Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
                Our Commitment
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-primary-900">
                Professional Care When Every Moment Matters
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  RAJA AMBULANCE provides ambulance and support services to our
                  community. We are committed to delivering professional and
                  reliable assistance during times of need — whether it is an
                  emergency ambulance call, patient transportation, funeral
                  arrangements, or air ambulance booking.
                </p>
                <p>
                  Our services span ambulance transportation, patient shifting
                  with AC and Non-AC options, oxygen service, funeral and ratham
                  services, freezer box facilities, air ambulance booking
                  assistance, body storage, and human remains transport via
                  train, airline, and road.
                </p>
                <p>
                  We focus on customer care and aim to make every interaction as
                  smooth and dignified as possible. Our team is available around
                  the clock to respond to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-20 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-primary-900">
              Our Service Areas
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_SUMMARY.map((s, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-2xl bg-white p-6 shadow-premium ring-1 ring-gray-100 transition-all hover:shadow-premium-lg hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <s.icon size={26} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-emergency-600">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-primary-900">
              What Drives Us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 shadow-lg shadow-primary-100">
                  <v.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-emergency-600/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Need Our Service?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We are available 24/7. Call us or send a WhatsApp message and our
            team will assist you.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
