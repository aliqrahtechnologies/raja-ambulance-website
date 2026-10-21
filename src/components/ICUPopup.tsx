import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { ICU_FEATURED, getTelLink, getWhatsAppLink } from '@/data/siteData';

const POPUP_DELAY_MS = 2000;
const STORAGE_KEY = 'raja_icu_popup_dismissed';

export default function ICUPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  const whatsappMsg = `Hello, I would like to book ${ICU_FEATURED.title}. Please provide availability and details.`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      {/* Popup */}
      <div className="relative w-full max-w-lg animate-scale-in">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-primary-100">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary-600 via-emergency-500 to-primary-600" />

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label="Close popup"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full bg-emergency-100 px-3 py-1 text-xs font-bold text-emergency-700 uppercase tracking-wider">
                Featured Service
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-primary-900 leading-tight">
              ICU D Level Ambulance
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Need specialized ambulance transportation? Contact our team for
              assistance.
            </p>

            {/* Image */}
            <div className="mt-5 relative overflow-hidden rounded-2xl aspect-[16/9]">
              <img
                src={ICU_FEATURED.image}
                alt={ICU_FEATURED.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={getTelLink()}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-600 to-emergency-700 px-5 py-3.5 font-bold text-white shadow-lg shadow-emergency-500/25 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-100"
              >
                <Phone size={18} strokeWidth={2.5} />
                CALL NOW
              </a>
              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-700 hover:shadow-xl hover:scale-[1.02] active:scale-100"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                WHATSAPP
              </a>
            </div>

            <Link
              to="/services"
              onClick={close}
              className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              VIEW SERVICE
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
