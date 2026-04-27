import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Doble Aa",
    review:
      "A's Flooring did an outstanding job on my floors. They communicated every step of the way, worked with great attention to detail, and the final result looks amazing. They kept everything clean and were very respectful throughout the project. I couldn't be happier and highly recommend them!",
    time: "2 months ago",
    rating: 5,
  },
  {
    id: 2,
    name: "Abraham Lopez",
    review:
      "Huge shoutout to A's Flooring! Sergio and his team are the best. They came in, worked fast, and completely transformed my floors. Every detail looks perfect. Super friendly, reliable, and honest. 10/10!",
    time: "2 months ago",
    rating: 5,
  },
  {
    id: 3,
    name: "Juan Ayala",
    review:
      "Recommended from a coworker and had a great experience. Communication was great from start to finish and their work rate was phenomenal. 100% recommend!",
    time: "6 months ago",
    rating: 5,
  },
  {
    id: 4,
    name: "Arturo Amaya",
    review:
      "Was amazed by how I was able to get quality work done at an affordable price. Constant communication from start to finish. Will hire again.",
    time: "6 months ago",
    rating: 5,
  },
  {
    id: 5,
    name: "Damian S",
    review:
      "I've seen a lot of floors in my day, these guys get it done. Well done and quicker than expected! Grateful 🙏",
    time: "1 month ago",
    rating: 5,
  },
  {
    id: 6,
    name: "Cross Tovar",
    review:
      "Phenomenal work! Very communicative. They were respectful and worked efficiently. 10/10 recommend!",
    time: "6 months ago",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const t = testimonials[current];

  const Stars = ({ rating }) => (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 22 12 17.27 5.82 22l2.37-8.14L2 9.36h7.61L12 2z" />
        </svg>
      ))}
    </div>
  );

  // Initials avatar from name
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section
      id="testimonials"
      className="relative py-16 lg:py-24 px-6 bg-warm-white overflow-hidden"
    >
      <div className="absolute inset-0 warm-glow-br pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-amber-600" aria-hidden="true">
              <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 22 12 17.27 5.82 22l2.37-8.14L2 9.36h7.61L12 2z" />
            </svg>
            Google Reviews
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Real reviews from homeowners across San Diego.
          </p>
        </div>

        {/* Card */}
        <div className="relative bg-white border border-amber-100 shadow-warm-xl rounded-3xl p-8 sm:p-10">
          {/* Big quote mark decorativo */}
          <svg
            className="absolute top-6 right-8 h-16 w-16 text-amber-100"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.5 6c-3.5 0-6 2.5-6 6 0 3 2 5 4.5 5.5l.5-.5c-1.5-.5-2.5-2-2.5-3.5 0-2 1.5-3.5 3.5-3.5h1V6h-1zm10 0c-3.5 0-6 2.5-6 6 0 3 2 5 4.5 5.5l.5-.5c-1.5-.5-2.5-2-2.5-3.5 0-2 1.5-3.5 3.5-3.5h1V6h-1z" />
          </svg>

          <div className="flex items-center justify-between mb-5">
            <Stars rating={t.rating} />
            <div className="flex items-center gap-2">
              <img src="/googlelogo.png" className="h-5 w-5" alt="Google" />
              <span className="text-xs text-stone-500 font-medium">Verified Review</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-stone-800 leading-relaxed font-medium relative z-10">
            "{t.review}"
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-semibold text-sm border border-amber-200">
              {initials}
            </div>
            <div>
              <h4 className="font-semibold text-stone-900">{t.name}</h4>
              <p className="text-xs text-stone-500">{t.time}</p>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="mt-8 pt-6 border-t border-amber-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={[
                    "rounded-full transition-all",
                    i === current
                      ? "h-2 w-8 bg-amber-500"
                      : "h-2 w-2 bg-amber-200 hover:bg-amber-300",
                  ].join(" ")}
                />
              ))}
            </div>

            <a
              href="https://g.co/kgs/XG1f4Q4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 underline-offset-2 hover:underline text-sm font-medium"
            >
              View all reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}