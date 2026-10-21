import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Ambulance, Clock } from 'lucide-react';
import Logo from './Logo';
import { CONTACT, getTelLink, getWhatsAppLink } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-2xl p-3 inline-block">
              <Logo size="md" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Reliable ambulance and support services with professional care when
              every moment matters. Serving our community with dedication.
            </p>
            <div className="flex items-center gap-2 text-emergency-300">
              <Ambulance size={20} />
              <span className="font-bold text-lg tracking-wide">24/7 Available</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/testimonials', label: 'Testimonials' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                'ICU D Level Ambulance',
                'Patient Shifting',
                'Freezer Box Service',
                'Air Ambulance Booking',
                'Funeral Service',
                'Human Remains Transport',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={getTelLink()}
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emergency-600 group-hover:bg-emergency-500 transition-colors">
                  <Phone size={18} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs text-white/50">Call Anytime</div>
                  <div className="font-bold text-white">{CONTACT.phoneDisplay}</div>
                </div>
              </a>
              <a
                href={getWhatsAppLink(CONTACT.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 group-hover:bg-green-500 transition-colors">
                  <MessageCircle size={18} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs text-white/50">WhatsApp</div>
                  <div className="font-bold text-white">Chat with us</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600">
                  <Clock size={18} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs text-white/50">Availability</div>
                  <div className="font-bold text-white">24 Hours, 7 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {CONTACT.businessName}. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <p className="text-xs text-white/50">{CONTACT.tagline}</p>
            <p className="text-xs font-semibold tracking-wide text-white/70">
              Designed and Developed by <span className="text-emergency-300">AIQ TECHNOLOGIES</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
