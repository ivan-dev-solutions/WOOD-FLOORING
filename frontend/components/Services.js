import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Glued Down",
    description: "Adhesive install—ideal for concrete slabs and high-traffic areas.",
    image: "/project27.jpeg",
    highlights: ["Great for concrete", "High-traffic ready", "Stable finish"],
  },
  {
    title: "Nailed Down",
    description: "Classic wood installation for a solid, long-lasting feel.",
    image: "/project26.jpeg",
    highlights: ["Traditional method", "Strong hold", "Premium feel"],
  },
  {
    title: "LVP (Luxury Vinyl Plank)",
    description: "Water-resistant, stylish, and durable—wood look with easy care.",
    image: "/project24.jpeg",
    highlights: ["Water-resistant", "Easy maintenance", "Modern look"],
  },
  {
    title: "Floating",
    description: "Fast install system—planks lock together without glue or nails.",
    image: "/project23.jpeg",
    highlights: ["Quick install", "Clean process", "Great value"],
  },
  {
    title: "Vinyl Glued Down",
    description: "Affordable, durable vinyl installed directly to the subfloor.",
    image: "/project22.jpeg",
    highlights: ["Budget-friendly", "Durable surface", "Smooth finish"],
  },
  {
    title: "Carpet",
    description: "Soft, warm comfort—ideal for bedrooms and living spaces.",
    image: "/project25.jpeg",
    highlights: ["Comfort", "Insulation", "Quiet feel"],
  },
];

function ChevronDown({ isOpen }) {
  return (
    <svg
      className={[
        "h-5 w-5 text-stone-500 transition-transform duration-200 flex-shrink-0",
        isOpen ? "rotate-180" : "rotate-0",
      ].join(" ")}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 bg-warm-white overflow-hidden">
      <div className="absolute inset-0 warm-glow-br pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(520px,1.1fr)_minmax(0,1fr)] gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Header + active proof — desktop sees image, mobile only sees title */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">
              Our Flooring Services
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-stone-700 leading-relaxed max-w-xl">
              Tap a service below to see an example project and the best fit for your space.
            </p>
          </div>

          {/* Active proof card — solo desktop */}
          <motion.div
            key={activeService.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="hidden lg:block relative overflow-hidden rounded-3xl border border-amber-100 bg-cream-100 shadow-warm-xl aspect-[16/10]"
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/15 to-transparent" />

            <div className="absolute left-5 right-5 bottom-5">
              <div className="flex flex-col gap-3">
                <div className="inline-flex w-fit items-center rounded-full bg-white/15 backdrop-blur px-4 py-2 text-white text-sm font-semibold">
                  {activeService.title}
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeService.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90 border border-white/10"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Accordion list */}
        <div className="space-y-3">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={service.title}
                className={[
                  "rounded-2xl border transition cursor-pointer",
                  isActive
                    ? "border-amber-300 bg-cream-100 shadow-warm-lg"
                    : "border-amber-100/70 bg-white hover:bg-cream-50 shadow-warm",
                ].join(" ")}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={[
                        "text-xs sm:text-sm font-semibold w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition flex-shrink-0",
                        isActive
                          ? "bg-amber-500 text-white shadow-warm"
                          : "bg-cream-200 text-amber-800",
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm sm:text-lg font-semibold text-stone-900 leading-tight">
                        {service.title}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-snug">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ChevronDown isOpen={isActive} />
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <div className="rounded-2xl bg-white border border-amber-100 p-3 sm:p-4 shadow-warm">
                          {/* Image - en mobile arriba (full width), en desktop al lado */}
                          <div className="flex flex-col sm:grid sm:grid-cols-[120px_1fr] gap-3 sm:gap-4 sm:items-center">
                            <div className="overflow-hidden rounded-xl border border-amber-100/70 bg-cream-100 aspect-[4/3] sm:aspect-[4/3]">
                              <img
                                src={service.image}
                                alt={`${service.title} example`}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-stone-900">
                                Example project
                              </p>
                              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                {service.description}
                              </p>

                              <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                                {service.highlights.map((h) => (
                                  <span
                                    key={h}
                                    className="rounded-full bg-cream-100 px-2.5 py-1 text-[11px] sm:text-xs text-amber-900 border border-amber-200/60"
                                  >
                                    {h}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-3 sm:mt-4">
                                <a
                                  href="#questionnaire"
                                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-warm hover:bg-amber-600 hover:shadow-warm-lg transition active:scale-[0.99]"
                                >
                                  Get a Free Quote
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}