export default function WhatWeDo() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Columna izquierda: título + texto */}
        <div>
          <div className="flex items-center gap-2 mb-4">
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
            <h2 className="text-4xl font-bold text-neutral-800">What We Do</h2>
          </div>
          <div className="w-16 h-1 bg-yellow-500 rounded mb-6"></div>

         <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
            At{" "}
            <span className="font-semibold text-yellow-600">A’s Flooring</span>,
            we specialize in a wide range of flooring solutions tailored to meet
            your needs. Our services include the installation, repair, and
            finishing of hardwood floors, laminate, vinyl, resilient sheet
            goods, and carpet. We also handle subfloor preparation, moisture
            testing, and floor leveling to ensure a flawless finish. Whether
            you’re looking to update your home or commercial space, we deliver
            quality craftsmanship and reliable service every step of the way.
          </p>
        </div>

        {/* Columna derecha: imagen */}
        <div className="flex justify-center">
          <img
            src="project7.jpeg"
            alt="Flooring service"
            className="w-full max-w-xl rounded-2xl shadow-xl object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
