import { useEffect, useState } from "react";

export default function Certification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("certification");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="certification" className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto p-8 lg:p-10 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Icon */}
            <div className="text-yellow-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 md:h-16 md:w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.104 0 2-.672 2-1.5S13.104 5 12 5s-2 .672-2 1.5S10.896 8 12 8zm0 2c-2.21 0-4 1.567-4 3.5V16h8v-2.5c0-1.933-1.79-3.5-4-3.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12v7a2 2 0 01-2 2h-3.5M4 12v7a2 2 0 002 2h3.5"
                />
              </svg>
            </div>

            {/* Text Content */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-2">
                Certification
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Certified and Quality Guaranteed
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                A&apos;s Flooring Inc. is a fully licensed and certified contractor
                specializing in Flooring and Floor Covering (C15). Our License
                Number <span className="font-semibold">1151690</span>, issued
                by the{" "}
                <span className="font-semibold">
                  Contractors State License Board (CSLB)
                </span>
                , reflects our commitment to the highest standards of
                craftsmanship and professionalism.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Choosing a licensed contractor means peace of mind. Your project
                will be handled with full accountability, legal compliance, and
                expert-level care. We take pride in delivering both stunning
                results and the long-term protection your home deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
