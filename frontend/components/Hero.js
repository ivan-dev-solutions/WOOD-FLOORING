import { useEffect, useState } from "react";

const images = ["/project7.jpeg", "/project6.jpeg", "/project2.jpg"];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background images using simple img tags */}
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              index === currentImage ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ zIndex: 0 }}
          />
        ))}

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-stone-950/55"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-950/55 via-stone-900/30 to-stone-950/65"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="relative w-full max-w-6xl px-6 sm:px-10 py-24 sm:py-28"
          style={{ zIndex: 2 }}
        >
          <div className="mx-auto max-w-3xl text-center text-white">
            {/* Trust badge */}
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-4 py-2 text-xs sm:text-sm tracking-wide backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Licensed C-15 Contractor • CSLB #1151690 • San Diego
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              Premium Wood Flooring for{" "}
              <span className="text-amber-400">Modern Homes</span> &amp;
              Commercial Spaces
            </h1>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
              Over a decade installing hardwood, vinyl plank, and laminate across
              San Diego. Free in-home estimates within 48 hours.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#questionnaire"
                className="w-full sm:w-auto rounded-full bg-amber-500 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-2xl transition-transform hover:scale-[1.02] hover:bg-amber-600 active:scale-[0.99]"
              >
                Get a Free Quote
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Our Work
              </a>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Fast response • Free consultation • Serving San Diego &amp; surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-cream-50 border-y border-amber-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              {
                title: "Licensed & Insured",
                subtitle: "CSLB #1151690",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "10+ Years Experience",
                subtitle: "Hundreds of installs",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Free Estimates",
                subtitle: "In-home, no commitment",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "5★ Google Rated",
                subtitle: "Verified reviews",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 22 12 17.27 5.82 22l2.37-8.14L2 9.36h7.61L12 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 px-3 py-2"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-700">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-stone-900 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-600 leading-tight mt-0.5 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}