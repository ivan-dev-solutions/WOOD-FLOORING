import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Cada proyecto tiene un "size" que define su altura en el masonry:
 *  - "tall"   → aspect ratio 3:4  (vertical, escaleras, hallways)
 *  - "wide"   → aspect ratio 4:3  (rooms horizontales, paneo)
 *  - "square" → aspect ratio 1:1  (detalles, transiciones)
 *
 * Mezclar tamaños es lo que le da el look orgánico Pinterest.
 */
const projects = [
  { id: 12, image: "/project27.jpeg", title: "Hallway", category: "Wood-look • Clean transitions", size: "wide", featured: true },
  { id: 7,  image: "/project22.jpeg", title: "Living Area", category: "Vinyl • Bright finish", size: "wide" },
  { id: 10, image: "/project25.jpeg", title: "Staircase", category: "Stairs • Full install", size: "tall" },
  { id: 8,  image: "/project23.jpeg", title: "Raised Platform", category: "Wood-look • Custom detail", size: "square" },
  { id: 11, image: "/project26.jpeg", title: "Entryway + Stairs", category: "Renovation • Durable finish", size: "tall" },
  { id: 9,  image: "/project24.jpeg", title: "Transition Detail", category: "Stairs • Precision work", size: "wide" },
  { id: 1,  image: "/project8.jpeg",  title: "Modern Oak", category: "Oak • Modern look", size: "square" },
  { id: 4,  image: "/project4.jpg",   title: "Hardwood Finish", category: "Hardwood • Classic finish", size: "tall" },
  { id: 2,  image: "/project2.jpg",   title: "Engineered Wood", category: "Engineered • Premium feel", size: "wide" },
];

const sizeClasses = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

const clampIndex = (i, len) => (i + len) % len;

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxOpen = lightboxIndex !== null;

  const featured = projects.find((p) => p.featured) || projects[0];
  const gridProjects = projects.filter((p) => !p.featured);

  const allForLightbox = [featured, ...gridProjects];
  const count = allForLightbox.length;

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => clampIndex(i + 1, count));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => clampIndex(i - 1, count));
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, count]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section id="portfolio" className="relative py-16 lg:py-24 bg-cream-200 texture-grain overflow-hidden">
      <div className="absolute inset-0 warm-glow-tl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Our Portfolio
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 leading-[1.1]">
              Recent Work
            </h2>
            <p className="mt-3 text-stone-700 text-base sm:text-lg">
              Curated examples of installs, transitions, and detail work across San Diego.
            </p>
          </div>

          {/* Project counter — premium touch */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <p className="text-5xl font-semibold text-stone-900 tracking-tight tabular-nums">
              {String(projects.length).padStart(2, "0")}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-amber-700 font-semibold">
              Projects featured
            </p>
          </div>
        </div>

        {/* FEATURED — más compacto, max-h limitado */}
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="group relative w-full text-left overflow-hidden rounded-3xl border border-amber-100 bg-cream-100 shadow-warm-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 mb-6"
          aria-label={`Open featured project: ${featured.title}`}
        >
          <div className="relative aspect-[21/9] sm:aspect-[21/8] max-h-[380px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-transparent to-transparent" />

            {/* Featured badge */}
            <div className="absolute top-5 left-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-warm-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                  <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 22 12 17.27 5.82 22l2.37-8.14L2 9.36h7.61L12 2z" />
                </svg>
                Featured Project
              </div>
            </div>

            <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-[0.18em] font-semibold mb-2">
                  01 / Selected Work
                </p>
                <p className="text-white text-2xl sm:text-3xl font-semibold leading-tight">
                  {featured.title}
                </p>
                <p className="mt-1 text-white/80 text-sm">
                  {featured.category}
                </p>
              </div>

              <div className="flex-shrink-0 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 group-hover:bg-amber-500 group-hover:ring-amber-400 transition">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* MASONRY GRID — using CSS columns (no JS, no extra dependencies) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {gridProjects.map((p, idx) => {
            const lbIndex = idx + 1; // featured = 0
            const projectNumber = String(idx + 2).padStart(2, "0");
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => openLightbox(lbIndex)}
                className="group block w-full text-left overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-warm hover:shadow-warm-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 mb-6 break-inside-avoid"
                aria-label={`Open project: ${p.title}`}
              >
                <div className={`relative ${sizeClasses[p.size]} bg-cream-100 overflow-hidden`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />

                  {/* Number badge — esquina superior */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur px-2.5 text-xs font-semibold text-stone-900 shadow-warm">
                      {projectNumber}
                    </span>
                  </div>

                  {/* Hover overlay con info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute left-4 right-4 bottom-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-base sm:text-lg font-semibold leading-tight">
                      {p.title}
                    </p>
                    <p className="mt-1 text-white/80 text-xs sm:text-sm">
                      {p.category}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold">
                      View project
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile-only bottom label (siempre visible en touch devices) */}
                  <div className="absolute inset-x-0 bottom-0 sm:hidden bg-gradient-to-t from-stone-950/85 to-transparent pt-12 pb-3 px-4">
                    <p className="text-white text-sm font-semibold leading-tight">
                      {p.title}
                    </p>
                    <p className="text-white/75 text-xs">
                      {p.category}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA al final del portfolio */}
        <div className="mt-12 text-center">
          <p className="text-stone-700 text-base mb-5">
            Like what you see? Let&apos;s talk about your space.
          </p>
          <a
            href="#questionnaire"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-base font-semibold text-white shadow-warm-lg transition hover:bg-amber-600 hover:shadow-warm-xl hover:scale-[1.02] active:scale-[0.99]"
          >
            Get a Free Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-[2px] p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-stone-950 ring-1 ring-amber-300/20 shadow-2xl">
              <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/10">
                    {lightboxIndex + 1} / {count}
                  </span>
                  <span className="hidden sm:inline text-sm text-white/90">
                    {allForLightbox[lightboxIndex].title} — {allForLightbox[lightboxIndex].category}
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-full bg-white text-stone-900 px-3 py-1.5 text-sm font-medium hover:bg-cream-50"
                  onClick={closeLightbox}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/10] w-full bg-stone-950">
                <Image
                  src={allForLightbox[lightboxIndex].image}
                  alt={allForLightbox[lightboxIndex].title}
                  fill
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between p-3">
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15"
                  onClick={() => setLightboxIndex((i) => clampIndex(i - 1, count))}
                >
                  ← Prev
                </button>

                <p className="text-xs text-white/70 hidden sm:block">
                  Use ← → keys to navigate, Esc to close
                </p>

                <button
                  type="button"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15"
                  onClick={() => setLightboxIndex((i) => clampIndex(i + 1, count))}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}