interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function Logo({ size = 'md', variant = 'dark', showText = true }: LogoProps) {
  const imageSizes = {
    sm: 'h-10 w-[150px]',
    md: 'h-12 w-[190px]',
    lg: 'h-16 w-[250px]',
  };

  return (
    <span className={`inline-flex items-center ${imageSizes[size]} ${variant === 'light' ? 'rounded-xl bg-white/95 px-2' : ''}`}>
      <img
        src="/WhatsApp_Image_2026-09-30_at_6.15.41_PM.jpeg"
        alt="Raja Ambulance — You Are in Good Hands"
        className={`h-full w-full object-contain ${showText ? '' : 'drop-shadow-[0_16px_24px_rgba(30,64,175,0.22)]'}`}
      />
    </span>
  );
}
