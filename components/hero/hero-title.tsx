// hero-title.tsx
export function HeroTitle() {
  return (
    <div className="relative flex min-w-0 flex-col items-center justify-center px-4 sm:px-6">
      <p className="mb-3 text-lg font-normal text-surface opacity-80 sm:text-xl md:text-2xl">
        Hi! Im Fasterino
      </p>

      <h1 className="max-w-5xl text-balance wrap-break-word text-center text-[clamp(2rem,5vw,7rem)] font-light leading-[1.1] tracking-tight text-surface sm:tracking-[-0.04em] lg:tracking-[-0.08em]">
        Full-stack Developer
        <br />
        Engineer & AI Enthusiast
      </h1>
    </div>
  );
}
