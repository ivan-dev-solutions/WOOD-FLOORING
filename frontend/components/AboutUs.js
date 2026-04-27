import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left - Image */}
          <div className="relative">
            <Image
              src="/aboutUs.jpg"
              alt="About Us"
              width={640}
              height={420}
              className="rounded-2xl shadow-xl object-cover"
            />
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 font-semibold text-sm rounded-full shadow-md">
              10+ Years Experience
            </div>
          </div>

          {/* Right - Text */}
          <div className="max-w-xl space-y-5">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-2">
                About us
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Who We Are
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="text-yellow-500 font-semibold">A's Flooring</span>, we take
              pride in delivering high-quality wood flooring with precision and care.
              We focus on clear communication, attention to detail, and a smooth
              experience from start to finish. Your satisfaction is our top priority,
              and we’re committed to bringing your vision to life with craftsmanship
              you can trust.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experts is dedicated to delivering excellence in every
              project, whether it's hardwood, vinyl, laminate, or carpet. We take
              pride in ensuring our clients receive the best materials and
              workmanship for their flooring needs.
            </p>

            {/* Call to Action */}
            <div className="pt-2">
              <a
                href="#questionnaire"
                className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
