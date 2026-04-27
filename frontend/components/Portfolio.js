import { useEffect, useState } from "react";
import Image from "next/image";

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
    <section id="portfolio" className="relative py-12 sm:py-16 lg:py-24 bg-cream-200 texture-grain overflow-hidden">
      <div className="absolute inset-0 warm-glow-tl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-amber-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Our Portfolio
              </p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 leading-[1.1]">
                Recent Work
              </h2>
              <p className="mt-3 text-stone-700 text-sm sm:text-lg">
                Curated examples of installs, transitions, and detail work across San Diego.
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-1">
              <p className="text-5xl font-semibold text-stone-900 tracking-tight tabular-nums">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-700 font-semibold">
                Projects featured
              </p>
            </div>
          </div>
        </div>

        {/* FEATURED */}
        <div className="px-4 sm:px-6 lg:px-8 mb-6">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group relative w-full text-left overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-100 bg-cream-100 shadow-warm-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            aria-label={`Open featured project: ${featured.title}`}
          >
            <div className="relative aspect-[4/3] sm:aspect-[21/9] sm:max-h-[380px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/25 to-transparent" />

              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-white shadow-warm-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 22 12 17.27 5.82 22l2.37-8.14L2 9.36h7.61L12 2z" />
                  </svg>
                  Featured Project
                </div>
              </div>

              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold mb-1.5 sm:mb-2">
                    01 / Selected Work
                  </p>
                  <p className="text-white text-xl sm:text-3xl font-semibold leading-tight">
                    {featured.title}
                  </p>
                  <p className="mt-1 text-white/80 text-xs sm:text-sm">
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
        </div>

        {/* MOBILE: horizontal carousel */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-2">
            {gridProjects.map((p, idx) => {
              const lbIndex = idx + 1;
              const projectNumber = String(idx + 2).padStart(2, "0");
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => openLightbox(lbIndex)}
                  className="group relative flex-shrink-0 w-[78%] snap-center overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-warm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  aria-label={`Open project: ${p.title}`}
                >
                  <div className="relative aspect-[4/5] bg-cream-100 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="80vw"
                      className="object-cover"
                    />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/90 backdrop-blur px-2 text-[11px] font-semibold text-stone-900 shadow-warm">
                        {projectNumber}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent pt-16 pb-4 px-4">
                      <p className="text-white text-base font-semibold leading-tight">
                        {p.title}
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        {p.category}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hint para que el usuario sepa que se desliza */}
          <p className="mt-3 px-4 text-center text-xs text-stone-500">
            ← Swipe to see more projects →
          </p>
        </div>

        {/* DESKTOP: masonry grid */}
        <div className="hidden md:block px-4 sm:px-6 lg:px-8">
          <div className="columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {gridProjects.map((p, idx) => {
              const lbIndex = idx + 1;
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
                      sizes="(min-width: 1024px) 360px, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur px-2.5 text-xs font-semibold text-stone-900 shadow-warm">
                        {projectNumber}
                      </span>
                    </div>

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
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-stone-700 text-sm sm:text-base mb-4 sm:mb-5">
            Like what you see? Let&apos;s talk about your space.
          </p>
          <a
            href="#questionnaire"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-warm-lg transition hover:bg-amber-600 hover:shadow-warm-xl hover:scale-[1.02] active:scale-[0.99]"
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
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-[2px] p-3 sm:p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-stone-950 ring-1 ring-amber-300/20 shadow-2xl">
              <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-2.5 sm:p-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] sm:text-xs text-white ring-1 ring-white/10 flex-shrink-0">
                    {lightboxIndex + 1} / {count}
                  </span>
                  <span className="hidden sm:inline text-sm text-white/90 truncate">
                    {allForLightbox[lightboxIndex].title} — {allForLightbox[lightboxIndex].category}
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-full bg-white text-stone-900 px-3 py-1.5 text-sm font-medium hover:bg-cream-50 flex-shrink-0"
                  onClick={closeLightbox}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-stone-950">
                <Image
                  src={allForLightbox[lightboxIndex].image}
                  alt={allForLightbox[lightboxIndex].title}
                  fill
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between p-2.5 sm:p-3 gap-2">
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-white ring-1 ring-white/10 hover:bg-white/15"
                  onClick={() => setLightboxIndex((i) => clampIndex(i - 1, count))}
                >
                  ← Prev
                </button>

                <p className="text-[10px] sm:text-xs text-white/70 hidden sm:block">
                  Use ← → keys to navigate, Esc to close
                </p>

                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-white ring-1 ring-white/10 hover:bg-white/15"
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