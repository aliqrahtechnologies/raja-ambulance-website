import { Phone } from 'lucide-react';
import { CONTACT, getTelLink } from '@/data/siteData';

export default function FloatingCallButton() {
  return (
    <>
      {/* Desktop — bottom right */}
      <a
        href={getTelLink()}
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emergency-600 to-emergency-700 px-6 py-4 text-white font-bold shadow-premium-lg shadow-emergency-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emergency-500/50 active:scale-100"
      >
        <span className="absolute inset-0 rounded-2xl bg-emergency-500 animate-pulse-ring" />
        <AmbulanceIcon />
        <div className="relative flex flex-col leading-none">
          <span className="text-xs font-semibold text-white/80">Emergency</span>
          <span className="text-base">CALL NOW</span>
        </div>
      </a>

      {/* Mobile — bottom right, large tap target */}
      <a
        href={getTelLink()}
        className="lg:hidden fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emergency-500 to-emergency-700 text-white shadow-premium-lg shadow-emergency-500/40 transition-transform active:scale-95"
        aria-label={`Call ${CONTACT.businessName}`}
      >
        <span className="absolute inset-0 rounded-full bg-emergency-500 animate-pulse-ring" />
        <Phone size={28} className="relative" strokeWidth={2.5} />
      </a>
    </>
  );
}

function AmbulanceIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative"
    >
      <path d="M10 10H6m0 0V6m0 4v4" />
      <path d="M2 17v-5a2 2 0 0 1 .6-1.4L4 9" />
      <path d="M4 9V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v8" />
      <path d="M15 9h3l3 3v3a2 2 0 0 1-2 2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
