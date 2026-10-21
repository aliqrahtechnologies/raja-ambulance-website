import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '@/data/siteData';
import { getWhatsAppLink } from '@/data/siteData';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const bookMessage = `Hello, I would like to book ${service.title}. Please provide availability and details.`;
  const whatsappLink = getWhatsAppLink(bookMessage);

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1.5 ${
        featured ? 'ring-2 ring-emergency-500/40' : 'ring-1 ring-gray-100'
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        {featured && (
          <span className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-emergency-600 to-emergency-700 px-3 py-1 text-xs font-bold text-white shadow-lg">
            FEATURED SERVICE
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-primary-700 shadow-sm">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-primary-900 leading-snug">{service.title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
          {service.description}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-500 to-emergency-700 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emergency-500/25 transition-all hover:shadow-lg hover:shadow-emergency-500/40 group-hover:scale-[1.02] active:scale-100"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          BOOK NOW
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  );
}

export function ServiceCardLarge({ service }: { service: ServiceItem }) {
  const bookMessage = `Hello, I would like to book ${service.title}. Please provide availability and details.`;
  const whatsappLink = getWhatsAppLink(bookMessage);

  return (
    <article
      className="group relative grid overflow-hidden rounded-3xl bg-white shadow-premium-lg ring-2 ring-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 lg:grid-cols-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px]">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent lg:bg-gradient-to-r" />
        <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-emergency-600 to-emergency-700 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
          FEATURED SERVICE
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-6 lg:p-10">
        <span className="text-sm font-bold uppercase tracking-wider text-emergency-600">Most Requested</span>
        <h3 className="mt-2 text-2xl lg:text-3xl font-extrabold text-primary-900 leading-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-500 to-emergency-700 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emergency-500/25 transition-all hover:shadow-xl hover:shadow-emergency-500/40 hover:scale-105 active:scale-100"
          >
            <MessageCircle size={20} strokeWidth={2.5} />
            BOOK NOW
          </a>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white ring-1 ring-primary-200 px-6 py-3.5 text-base font-bold text-primary-700 transition-all hover:bg-primary-50 hover:ring-primary-300"
          >
            View Service
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
