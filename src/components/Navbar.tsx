import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT, getTelLink } from '@/data/siteData';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top emergency strip */}
      <div className="hidden md:block bg-primary-900 text-white py-1.5 text-sm">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <span className="font-medium tracking-wide">24/7 Emergency Service Available</span>
          <a
            href={getTelLink()}
            className="flex items-center gap-2 font-bold transition-colors hover:text-emergency-200"
          >
            <Phone size={15} strokeWidth={2.5} />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-premium border-b border-primary-100/50'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between lg:h-[72px]">
            <Link to="/" className="flex-shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'text-emergency-700 bg-emergency-50'
                        : 'text-gray-600 hover:text-emergency-700 hover:bg-emergency-50/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop call button */}
            <a
              href={getTelLink()}
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emergency-600 to-emergency-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emergency-500/30 transition-all hover:shadow-xl hover:shadow-emergency-500/40 hover:scale-105 active:scale-100"
            >
              <Phone size={17} strokeWidth={2.5} />
              24/7 CALL
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-primary-800 hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute inset-x-0 top-full bg-white shadow-premium-lg border-t border-gray-100 animate-slide-down">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-emergency-700 bg-emergency-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={getTelLink()}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emergency-600 to-emergency-700 px-5 py-3.5 text-base font-bold text-white shadow-lg"
              >
                <Phone size={20} strokeWidth={2.5} />
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
