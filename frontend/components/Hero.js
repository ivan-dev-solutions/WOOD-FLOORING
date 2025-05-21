import { useEffect, useState } from "react";

const images = [
  "/project7.jpeg",
  "/project6.jpeg",
  "/project2.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image with Animation */}
      <div
        className="absolute w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      {/* Overlay */}
      
    <div className="absolute w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center px-6">
      {/* Título principal */}
      <h1 className="text-5xl font-bold">Premium Wood Flooring Solutions</h1>

      {/* Subtítulo */}
      <p className="mt-4 text-lg">
        Elegance, durability, and expert craftsmanship
      </p>

      {/* Contenedor de botones lado a lado */}
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
