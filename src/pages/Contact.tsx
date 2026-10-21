import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Clock,
  User,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import CTAButtons from '@/components/CTAButtons';
import { CONTACT, getTelLink, getWhatsAppLink } from '@/data/siteData';

const SERVICE_OPTIONS = [
  'ICU D Level Ambulance',
  'Patient Shifting (AC / Non-AC)',
  'Oxygen Service',
  'Freezer Box Service',
  'Funeral Service',
  'Air Ambulance Booking',
  'AC & Non-AC Transport',
  'Body Storage',
  'Human Remains Transport',
  'Other',
];

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      e.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please enter your message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      // Send via WhatsApp since there is no email backend
      const waMessage = `Hello, I am ${form.name}.%0A%0APhone: ${form.phone}%0AService Required: ${form.service}%0A%0AMessage: ${form.message}`;
      window.open(
        `https://wa.me/${CONTACT.whatsappNumber}?text=${waMessage}`,
        '_blank'
      );
      setSubmitted(true);
      setForm({ name: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

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
            Contact Us
          </span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Contact RAJA AMBULANCE
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            Reach us anytime for ambulance, funeral, or support services. We are
            available 24/7.
          </p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-12 -mt-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Call */}
            <a
              href={getTelLink()}
              className="group flex flex-col items-center text-center rounded-3xl bg-white shadow-premium ring-1 ring-gray-100 p-8 transition-all hover:shadow-premium-lg hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emergency-100 text-emergency-600 group-hover:bg-emergency-600 group-hover:text-white transition-colors">
                <Phone size={30} strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-bold text-primary-900 text-lg">Call Us</h3>
              <p className="mt-1 text-2xl font-extrabold text-emergency-600">{CONTACT.phoneDisplay}</p>
              <p className="mt-1 text-sm text-gray-500">Available 24/7</p>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppLink(CONTACT.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center rounded-3xl bg-white shadow-premium ring-1 ring-gray-100 p-8 transition-all hover:shadow-premium-lg hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle size={30} strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-bold text-primary-900 text-lg">WhatsApp</h3>
              <p className="mt-1 text-lg font-bold text-green-600">Chat with us</p>
              <p className="mt-1 text-sm text-gray-500">Quick response</p>
            </a>

            {/* Hours */}
            <div className="flex flex-col items-center text-center rounded-3xl bg-white shadow-premium ring-1 ring-gray-100 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                <Clock size={30} strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-bold text-primary-900 text-lg">Availability</h3>
              <p className="mt-1 text-lg font-bold text-primary-600">24 Hours, 7 Days</p>
              <p className="mt-1 text-sm text-gray-500">Always here for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
              Enquiry Form
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-primary-900">
              Send Us an Enquiry
            </h2>
            <p className="mt-3 text-gray-600">
              Fill out the form below and we will get back to you via WhatsApp.
            </p>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 ring-1 ring-green-200 p-4 animate-slide-down">
              <CheckCircle size={22} className="text-green-600 flex-shrink-0" strokeWidth={2.5} />
              <p className="text-sm font-semibold text-green-800">
                Your enquiry has been sent via WhatsApp. We will respond shortly.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white shadow-premium-lg ring-1 ring-gray-100 p-6 lg:p-8 space-y-5"
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border-0 ring-1 pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:ring-2 ${
                    errors.name
                      ? 'ring-emergency-300 focus:ring-emergency-500'
                      : 'ring-gray-200 focus:ring-primary-500'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1 text-sm text-emergency-600">
                  <AlertCircle size={14} />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full rounded-xl border-0 ring-1 pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:ring-2 ${
                    errors.phone
                      ? 'ring-emergency-300 focus:ring-emergency-500'
                      : 'ring-gray-200 focus:ring-primary-500'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1.5 flex items-center gap-1 text-sm text-emergency-600">
                  <AlertCircle size={14} />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-primary-900 mb-2">
                Service Required
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
                className={`w-full rounded-xl border-0 ring-1 px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 bg-white ${
                  errors.service
                    ? 'ring-emergency-300 focus:ring-emergency-500'
                    : 'ring-gray-200 focus:ring-primary-500'
                }`}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 flex items-center gap-1 text-sm text-emergency-600">
                  <AlertCircle size={14} />
                  {errors.service}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Tell us about your requirement"
                className={`w-full rounded-xl border-0 ring-1 px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 resize-none ${
                  errors.message
                    ? 'ring-emergency-300 focus:ring-emergency-500'
                    : 'ring-gray-200 focus:ring-primary-500'
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1 text-sm text-emergency-600">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-500 to-emergency-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emergency-500/25 transition-all hover:shadow-xl hover:shadow-emergency-500/40 hover:scale-[1.02] active:scale-100"
            >
              <Send size={20} strokeWidth={2.5} />
              Send Enquiry
            </button>

            <p className="text-center text-xs text-gray-400">
              Your enquiry will be sent via WhatsApp to {CONTACT.phoneDisplay}
            </p>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Prefer to Talk Directly?
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Call or WhatsApp us right now for immediate assistance.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
