import { useEffect, useState } from "react";

const images = ["/project7.jpeg", "/project6.jpeg", "/project2.jpg"];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-advance image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white text-center overflow-hidden">
      
      {/* Background images - behind everything */}
      <div className="absolute w-full h-full -z-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: index === currentImage ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Overlay content - always on top */}
      <div className="absolute w-full h-full z-10 bg-black bg-opacity-40 flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-bold">Premium Wood Flooring Solutions</h1>
        <p className="mt-4 text-lg">
          Elegance, durability, and expert craftsmanship
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href="#questionnaire"
            className="bg-yellow-500 px-8 py-4 rounded-full text-lg font-bold transition-transform transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-2xl"
          >
            Get a Quote
          </a>
          <a
            href="https://wa.me/16192076864?text=Hi!%20I%20would%20like%20to%20get%20a%20flooring%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-8 py-4 rounded-full text-lg font-bold text-white transition-transform transform hover:scale-110 active:scale-95 shadow-lg hover:bg-green-600"
          >
            Get in Contact
          </a>
        </div>
      </div>
    </section>
  );
}
