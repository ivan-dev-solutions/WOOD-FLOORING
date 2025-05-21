import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, image: "/project8.jpeg", title: "Modern Oak Flooring" },
  { id: 2, image: "/project2.jpg", title: "Luxury Engineered Wood" },
  { id: 3, image: "/project3.jpg", title: "Elegant Laminate Design" },
  { id: 4, image: "/project4.jpg", title: "Classic Hardwood Finish" },
  { id: 5, image: "/flooring-bg.jpg", title: "Contemporary Dark Wood" },
  { id: 6, image: "/project6.jpeg", title: "Minimalist Wood Style" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Recent Work</h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{project.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox/Modal for Image Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl">
              <button
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Selected Project"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
