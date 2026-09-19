// hero-video.tsx
export function HeroVideo() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 overflow-hidden md:inset-0 md:h-full"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-x-0 top-0 h-[200%] w-full object-cover object-top md:h-full md:-translate-y-10 md:object-center"
      >
        <source src="/videos/glassy-obj.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
