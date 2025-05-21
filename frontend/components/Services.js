import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Glued Down",
    description: "Durable flooring installation using adhesive. Great for concrete slabs and high-traffic spaces.",
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
        <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Nailed Down",
    description: "Classic wood installation method using nails for a solid and lasting finish.",
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 2l1 1v6l-1 1H5l-1-1V3l1-1h1zM13 2l1 1v6l-1 1h-1l-1-1V3l1-1h1zM20 2l1 1v6l-1 1h-1l-1-1V3l1-1h1z" strokeWidth="2" />
        <path d="M5 10v10M12 10v10M19 10v10" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "LVP (Luxury Vinyl Plank)",
    description: "Stylish, water-resistant vinyl flooring that mimics natural wood.",
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="6" rx="1" strokeWidth="2" />
        <rect x="3" y="10" width="18" height="6" rx="1" strokeWidth="2" />
        <rect x="3" y="17" width="18" height="4" rx="1" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Floating",
    description: "Quick-install system where planks float above the subfloor without glue or nails.",
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
        <path d="M4 6l4 4 4-4" strokeWidth="2" />
        <path d="M4 12l4 4 4-4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Vinyl Glued Down",
    description: "Affordable and durable vinyl flooring glued directly to the subfloor.",
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Carpet",
    description: "Warm and soft surface ideal for comfort and insulation in bedrooms and living areas.",
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
        <path d="M4 9h16M4 15h16" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(400px,_1fr)_1fr] gap-32">
        
        {/* Left column */}
        <div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
            </svg>
            <h2 className="text-3xl font-semibold text-neutral-800">Our Flooring Services</h2>
          </div>
          <div className="w-12 h-1 bg-yellow-500 rounded mt-4 mb-6"></div>
          <p className="text-gray-600 text-base leading-relaxed text-justify">
            We offer a wide range of flooring installation methods tailored to your space, style, and budget. Click on any service to learn more about how we can bring comfort, durability, and design to your home or business.
          </p>
        </div>

        {/* Right column: Services */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="cursor-pointer group"
              onClick={() => toggle(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6 items-start">
                <span className="text-yellow-500 font-bold text-lg min-w-[30px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                      {service.title}
                    </p>
                    <div className="ml-4">{service.icon}</div>
                  </div>
                  {activeIndex === index && (
                    <div className="mt-4 flex gap-4 items-start text-gray-600 text-base leading-relaxed">
                      <span className="hidden md:block">{service.icon}</span>
                      <p>{service.description}</p>
                    </div>
                  )}
                </div>
              </div>
              <hr className="mt-6 border-gray-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
