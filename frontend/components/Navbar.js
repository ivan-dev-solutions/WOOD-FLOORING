import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={[
        "fixed top-0 w-full z-50",
        "transition-all duration-200",
        scrolled
          ? "bg-white/85 backdrop-blur border-b border-black/5 shadow-sm"
          : "bg-white/60 backdrop-blur border-b border-black/0",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "body")}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.jpg"
            alt="A's Flooring"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl object-cover border border-black/5"
            priority
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
            A&apos;s Flooring
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "About", id: "#about" },
            { label: "Portfolio", id: "#portfolio" },
            { label: "Testimonials", id: "#testimonials" },
            { label: "Contact", id: "#contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <button
            onClick={(e) => scrollToSection(e, "#questionnaire")}
            className="hidden md:inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition active:scale-[0.99]"
          >
            Get a Free Quote
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 transition"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {[
              { label: "About", id: "#about" },
              { label: "Portfolio", id: "#portfolio" },
              { label: "Testimonials", id: "#testimonials" },
              { label: "Contact", id: "#contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={(e) => scrollToSection(e, "#questionnaire")}
              className="w-full mt-2 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
