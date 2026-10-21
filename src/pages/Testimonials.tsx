import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import CTAButtons from '@/components/CTAButtons';
import { TESTIMONIALS } from '@/data/siteData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = TESTIMONIALS.length;
  const visibleCount = 3;
  const maxIndex = Math.max(0, total - visibleCount);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <div className="premium-page">
      {/* Hero */}
      <section className="relative overflow-hidden premium-hero py-20 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600 animate-fade-in-up">
            Testimonials
          </span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            What Our Community Says
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            Feedback from those who have used our services. We are grateful for
            every message of support.
          </p>
        </div>
      </section>

      {/* Demo notice */}
      <div className="mx-auto max-w-7xl px-4 -mt-4 mb-4">
        <div className="flex items-start gap-3 rounded-xl bg-amber-50 ring-1 ring-amber-200 p-4">
          <Info size={20} className="flex-shrink-0 text-amber-600 mt-0.5" strokeWidth={2} />
          <p className="text-sm text-amber-800">
            The testimonials below are <strong>demo content</strong> shown as
            placeholders. They will be replaced with genuine customer reviews
            when provided.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <section
        className="py-12 lg:py-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Desktop/Tablet carousel */}
          <div className="hidden sm:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: show single testimonial */}
          <div className="sm:hidden">
            <TestimonialCard testimonial={TESTIMONIALS[current]} />
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-700 ring-1 ring-primary-200 transition-all hover:bg-primary-100 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? 'w-8 bg-primary-600'
                      : 'w-2.5 bg-primary-200 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-700 ring-1 ring-primary-200 transition-all hover:bg-primary-100 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16 lg:py-20 mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-emergency-600/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Experience Our Service
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Reach out to us anytime. We are here to help when you need it most.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="relative h-full rounded-3xl bg-white shadow-premium ring-1 ring-gray-100 p-6 lg:p-8 transition-all hover:shadow-premium-lg">
      <Quote size={40} className="absolute top-6 right-6 text-primary-100" strokeWidth={1} />

      {testimonial.isDemo && (
        <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-3">
          Demo
        </span>
      )}

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <Star key={idx} size={18} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
        "{testimonial.text}"
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-primary-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.location}</div>
        </div>
      </div>
    </div>
  );
}
