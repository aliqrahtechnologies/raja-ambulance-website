import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT, getTelLink, getWhatsAppLink } from '@/data/siteData';

interface CTAButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'hero' | 'compact';
  className?: string;
  whatsappMessage?: string;
}

export default function CTAButtons({
  size = 'md',
  variant = 'default',
  className = '',
  whatsappMessage = CONTACT.whatsappMessage,
}: CTAButtonsProps) {
  const sizes = {
    sm: { call: 'px-4 py-2.5 text-sm', wa: 'px-4 py-2.5 text-sm', icon: 16 },
    md: { call: 'px-6 py-3.5 text-base', wa: 'px-6 py-3.5 text-base', icon: 20 },
    lg: { call: 'px-8 py-4 text-lg', wa: 'px-8 py-4 text-lg', icon: 22 },
  };
  const s = sizes[size];

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
        <a
          href={getTelLink()}
          className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emergency-600 to-emergency-700 px-8 py-4 font-bold text-white shadow-xl shadow-emergency-500/30 transition-all hover:shadow-2xl hover:shadow-emergency-500/40 hover:scale-105 active:scale-100 overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <Phone size={s.icon} strokeWidth={2.5} className="relative" />
          <span className="relative">CALL NOW</span>
          <span className="relative text-sm font-semibold text-white/80 hidden sm:inline">— {CONTACT.phoneDisplay}</span>
        </a>
        <a
          href={getWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-8 py-4 font-bold text-green-700 shadow-xl ring-1 ring-green-200 transition-all hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-100"
        >
          <MessageCircle size={s.icon} strokeWidth={2.5} />
          WHATSAPP US
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={getTelLink()}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-500 via-emergency-600 to-emergency-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-emergency-500/30 transition-all hover:shadow-xl hover:shadow-emergency-500/40 hover:scale-105 active:scale-100"
      >
        <Phone size={s.icon} strokeWidth={2.5} />
        CALL NOW
      </a>
      <a
        href={getWhatsAppLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-700 hover:shadow-xl hover:scale-105 active:scale-100"
      >
        <MessageCircle size={s.icon} strokeWidth={2.5} />
        WHATSAPP US
      </a>
    </div>
  );
}
