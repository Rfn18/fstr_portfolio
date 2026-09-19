export function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className="pointer-events-none -translate-y-10  absolute inset-0 -z-10 h-full w-full object-cover"
    >
      <source src="/videos/glassy-obj.mp4" type="video/mp4" />
    </video>
  );
}
