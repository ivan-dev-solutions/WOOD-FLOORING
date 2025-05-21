import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <Image
              src="/aboutUs.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-2 font-bold text-lg rounded-tr-lg rounded-bl-lg">
              10+ Years Experience
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="text-yellow-500 font-semibold">A's Flooring</span>, we take pride in delivering high-quality wood flooring with precision and care. We focus on clear communication, 
              attention to detail, and a smooth experience from start to finish. Your satisfaction is our top priority,
               and we’re committed to bringing your vision to life with craftsmanship you can trust.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our team of experts is dedicated to delivering excellence in every project, whether it's hardwood, vinyl, laminate, or carpet. We take pride in 
              ensuring our clients receive the best materials and workmanship for their flooring needs.
            </p>

            {/* Call to Action */}
            <div className="mt-6">
              <a href="#questionnaire" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:scale-105 transition-transform">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
