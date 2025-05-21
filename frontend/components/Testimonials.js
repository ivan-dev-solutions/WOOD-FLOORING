import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Excellent quality and great service! My living room looks amazing.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    review: "Highly professional team. The flooring was installed perfectly.",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    review: "Great experience! The wood quality exceeded my expectations.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-6 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg italic">"{testimonials[current].review}"</p>
        <h4 className="mt-4 font-bold">{testimonials[current].name}</h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button
            onClick={nextTestimonial}
            className="bg-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-600"
          >
            Next Testimonial
          </button>
          <a
            href="https://g.co/kgs/XG1f4Q4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Leave us a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
