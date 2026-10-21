import { useRef, useState, useEffect } from 'react';
/**
 * 3D-style hero logo background with the supplied brand artwork.
 * Uses mouse-based perspective on desktop and gentle floating on mobile.
 */
export default function HeroLogo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isDesktop || !containerRef.current) return;

    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * 15;
      const rotateX = -y * 10;
      setTransform(
        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
      );
    };

    const handleLeave = () => {
      setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg)');
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Large 3D logo visual */}
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: isDesktop ? transform : undefined,
        }}
      >
        <div className="animate-float-slow">
          {/* Glass-like circular backdrop */}
          <div className="relative">
            {/* Outer glow rings */}
            <div className="absolute inset-0 -m-20 rounded-full bg-gradient-to-br from-primary-200/30 to-emergency-200/20 blur-3xl" />
            <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-tr from-primary-100/40 to-white/20 blur-2xl" />

            {/* Glass plaque with the supplied logo artwork */}
            <div
              className="relative flex items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 p-4 shadow-[0_28px_90px_-20px_rgba(30,64,175,0.34),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl sm:p-6"
              style={{ width: 'min(620px, 84vw)' }}
            >
              {/* Light reflection */}
              <div
                className="absolute top-0 left-1/4 h-1/3 w-1/2 rounded-full opacity-40 blur-xl"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
                }}
              />

              {/* Brand artwork remains proportional and recognizable */}
              <img
                src="/WhatsApp_Image_2026-09-30_at_6.15.41_PM.jpeg"
                alt="Raja Ambulance logo"
                className="relative z-10 h-auto w-full object-contain mix-blend-multiply opacity-80 drop-shadow-[0_20px_20px_rgba(30,64,175,0.18)]"
              />

              {/* Bottom shine */}
              <div
                className="absolute bottom-0 left-1/3 h-1/4 w-1/3 rounded-full opacity-20 blur-lg"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(37,99,235,0.4) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Parallax floating particles */}
      <div className="absolute top-[10%] left-[8%] h-3 w-3 rounded-full bg-primary-300/40 animate-float" />
      <div className="absolute top-[20%] right-[10%] h-2 w-2 rounded-full bg-emergency-300/40 animate-float-slow" />
      <div className="absolute bottom-[15%] left-[15%] h-4 w-4 rounded-full bg-primary-200/30 animate-float-slow" />
      <div className="absolute bottom-[25%] right-[12%] h-2.5 w-2.5 rounded-full bg-emergency-200/40 animate-float" />
    </div>
  );
}
