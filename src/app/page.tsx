import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop Video (md and up) */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile Video (below md) */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        src="/HeroP.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional: Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/10" />

      {/* Centered K Symbol + Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-exclusion">
        <Image
          src="/k.svg"
          alt="K"
          width={70}
          height={105}
          className="mb-4"
        />
        <p className="text-white text-base md:text-xl tracking-[0.4em] uppercase font-light">
          ASAK KARELA
        </p>
      </div>
    </div>
  )
}
