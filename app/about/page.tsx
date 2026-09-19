import Image from "next/image";

const paragraphs = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Asperiores aliquid voluptate est maxime veritatis adipisci voluptatem porro sunt, dignissimos cum magnam et perspiciatis possimus cumque quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
];

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-7xl py-16">
        <h1 className="text-5xl font-light sm:text-6xl lg:text-7xl">
          About Me
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed tracking-tight text-surface/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus labore modi distinctio voluptatem obcaecati, enim quam
          quaerat temporibus at recusandae iste delectus aspernatur sed mollitia
          vel sit laudantium repellendus! Asperiores aliquid voluptate est
          maxime veritatis adipisci voluptatem porro sunt, dignissimos cum
          magnam et perspiciatis possimus cumque quaerat?
        </p>
      </section>

      {/* Marquee (full-width, di luar container ber-padding) */}
      <section aria-label="Role" className="overflow-hidden py-6 sm:py-10">
        <p className="animate-marquee whitespace-nowrap text-center text-4xl font-medium text-surface motion-reduce:animate-none sm:text-6xl lg:text-8xl">
          Fullstack Developer & AI Enthusiast
        </p>
      </section>

      {/* Teks + Foto */}
      <section className="mx-auto max-w-7xl pb-16 pt-8">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-base leading-relaxed tracking-tight text-surface/70"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/me-sitting.37df8593.webp"
              alt="Fasterino"
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
