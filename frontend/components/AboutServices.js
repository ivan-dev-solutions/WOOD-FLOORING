import Image from "next/image";

const services = [
  {
    title: "Installation",
    desc: "Precision installation that enhances durability, comfort, and aesthetics.",
  },
  {
    title: "Refinishing",
    desc: "Restore the beauty of your floors without the cost of a full replacement.",
  },
  {
    title: "Custom Solutions",
    desc: "Tailored recommendations for your space, style, and budget—done right.",
  },
];

export default function AboutServices() {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-cream-100 texture-grain overflow-hidden">
      {/* Soft warm glow */}
      <div className="absolute inset-0 warm-glow-tl pointer-events-none" />

      <div className="relative max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

        {/* 1) ABOUT / WHO WE ARE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/aboutUs.jpg"
              alt="A's Flooring Inc. team working"
              width={720}
              height={520}
              className="rounded-2xl shadow-warm-xl object-cover w-full aspect-[4/3]"
              priority={false}
            />

            {/* Experience badge */}
            <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm font-semibold text-amber-900 shadow-warm-lg">
              10+ Years Experience
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              About
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
              Built on Craftsmanship and Attention to Detail
            </h2>

            <p className="mt-5 text-lg text-stone-700 leading-relaxed">
              At <span className="font-semibold text-amber-700">A&apos;s Flooring Inc.</span>, we
              deliver high-quality flooring with a clean process: clear communication,
              precise execution, and results that last.
            </p>

            <p className="mt-4 text-lg text-stone-700 leading-relaxed">
              From hardwood to vinyl, laminate, and carpet—we focus on the right materials,
              the right prep, and a finish you&apos;ll feel proud of every day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#questionnaire"
                className="inline-flex justify-center rounded-full bg-amber-500 px-7 py-4 text-base font-semibold text-white shadow-warm-lg transition hover:bg-amber-600 hover:shadow-warm-xl hover:scale-[1.02] active:scale-[0.99]"
              >
                Get a Free Quote
              </a>

              <a
                href="#portfolio"
                className="inline-flex justify-center rounded-full border border-stone-300 bg-white px-7 py-4 text-base font-semibold text-stone-900 transition hover:bg-cream-50 shadow-warm"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="section-divider" />

        {/* 2) CERTIFICATION */}
        <div className="rounded-3xl border border-amber-100 bg-white shadow-warm-xl">
          <div className="p-7 sm:p-9 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Certification
              </p>

              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                Licensed • Certified • Quality Guaranteed
              </h3>

              <p className="mt-4 text-lg text-stone-700 leading-relaxed">
                A&apos;s Flooring Inc. is a fully licensed contractor specializing in Flooring and Floor Covering (C15).
                License <span className="font-semibold text-stone-900">1151690</span> issued by the{" "}
                <span className="font-semibold text-stone-900">Contractors State License Board (CSLB)</span>.
              </p>

              <p className="mt-3 text-lg text-stone-700 leading-relaxed">
                Working with a licensed contractor means peace of mind: compliance, accountability, and
                craftsmanship you can trust.
              </p>
            </div>
          </div>
        </div>

        {/* 3) WHAT WE DO */}
        <div id="services" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              What we do
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">
              Flooring services built for long-term value
            </h2>

            <p className="mt-5 text-lg text-stone-700 leading-relaxed max-w-xl">
              We focus on the details that matter—prep, leveling, moisture testing, and clean finishing—so
              your floor looks great and performs for years.
            </p>

            {/* Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-amber-100 bg-white p-5 shadow-warm hover:shadow-warm-lg transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-stone-700 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#questionnaire"
                className="inline-flex justify-center rounded-full bg-amber-500 px-7 py-4 text-base font-semibold text-white shadow-warm-lg transition hover:bg-amber-600 hover:shadow-warm-xl hover:scale-[1.02] active:scale-[0.99]"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <Image
              src="/project7.jpeg"
              alt="Flooring service results"
              width={720}
              height={520}
              className="rounded-2xl shadow-warm-xl object-cover w-full aspect-[4/3]"
            />

            <div className="absolute bottom-4 left-4 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm font-semibold text-amber-900 shadow-warm-lg">
              Clean finish • Durable materials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}