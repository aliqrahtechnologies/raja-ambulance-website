import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Clock,
  Shield,
  Heart,
  Star,
  Ambulance,
  ChevronRight,
} from 'lucide-react';
import HeroLogo3D from '@/components/HeroLogo3D';
import CTAButtons from '@/components/CTAButtons';
import ServiceCard, { ServiceCardLarge } from '@/components/ServiceCard';
import ICUPopup from '@/components/ICUPopup';
import {
  CONTACT,
  ICU_FEATURED,
  HOME_PREVIEW_SERVICES,
  TESTIMONIALS,
  getTelLink,
} from '@/data/siteData';

export default function Home() {
  return (
    <>
      <ICUPopup />

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[radial-gradient(circle_at_78%_42%,rgba(219,234,254,0.72),transparent_30%),linear-gradient(135deg,#f8fbff_0%,#ffffff_48%,#fff7f7_100%)]">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-100/50 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-emergency-50/60 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* 3D Logo background */}
        <HeroLogo3D />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 min-h-[100svh] flex items-center pt-20 pb-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm ring-1 ring-primary-200 px-4 py-2 shadow-sm animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-emergency-500 animate-pulse" />
              <span className="text-sm font-semibold text-primary-800">
                24/7 Emergency Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl text-balance animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Emergency Care When You Need It Most
            </h1>

            {/* Supporting text */}
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Reliable ambulance and support services with professional care when
              every moment matters.
            </p>

            {/* CTAs */}
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <CTAButtons variant="hero" size="lg" />
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              {[
                { icon: Clock, label: '24/7', sub: 'Available' },
                { icon: Shield, label: 'Trusted', sub: 'Care' },
                { icon: Heart, label: 'Compassion', sub: 'First' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-primary-100 px-3 py-4"
                >
                  <item.icon size={24} className="text-primary-600" strokeWidth={2} />
                  <span className="mt-2 text-sm font-bold text-primary-900">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-primary-400">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-primary-300 p-1">
            <div className="h-2 w-1 rounded-full bg-primary-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* QUICK ACCESS BAR */}
      <section className="bg-primary-900 text-white py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <span className="text-sm font-semibold text-white/80">Need immediate assistance?</span>
          <a
            href={getTelLink()}
            className="inline-flex items-center gap-2 rounded-xl bg-emergency-600 px-6 py-2.5 font-bold text-white shadow-lg transition-all hover:bg-emergency-500 hover:scale-105"
          >
            <Phone size={18} strokeWidth={2.5} />
            {CONTACT.phoneDisplay}
          </a>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            Browse all services
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ICU FEATURED SERVICE */}
      <section className="py-20 lg:py-28 bg-white/75">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-emergency-600">
              Specialized Care
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-primary-900">
              Our Featured Ambulance Service
            </h2>
          </div>
          <ServiceCardLarge service={ICU_FEATURED} />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
              What We Offer
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-primary-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From emergency ambulance transport to funeral services and air
              ambulance booking — we provide comprehensive care when you need it.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_PREVIEW_SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emergency-500 to-emergency-700 px-8 py-3.5 font-bold text-white shadow-lg shadow-emergency-500/25 transition-all hover:shadow-xl hover:shadow-emergency-500/40 hover:scale-105 active:scale-100"
            >
              View All Services
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA BANNER */}
      <section className="relative overflow-hidden bg-primary-950 py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emergency-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <Ambulance size={48} className="mx-auto text-emergency-400" strokeWidth={1.5} />
          <h2 className="mt-6 text-3xl lg:text-4xl font-extrabold text-white text-balance">
            In an Emergency? Every Second Counts.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Call us now for immediate ambulance assistance. Our team is ready to
            help 24 hours a day, 7 days a week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={getTelLink()}
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emergency-500 to-emergency-700 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-emergency-500/30 transition-all hover:scale-105 active:scale-100"
            >
              <Phone size={26} strokeWidth={2.5} />
              {CONTACT.phoneDisplay}
            </a>
            <p className="text-sm text-white/50">{CONTACT.tagline}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-20 lg:py-28 bg-white/75">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
              Community Feedback
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-primary-900">
              What People Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div
                key={t.id}
                className="rounded-2xl bg-primary-50/40 ring-1 ring-primary-100 p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 text-primary-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-base font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Read all testimonials
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
