import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function for smooth scrolling to any section
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-[#D6B88C] text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Company Logo" width={70} height={70} className="h-14 w-auto" />
          <h1 className="text-3xl font-bold tracking-wide text-[#ECF0F1]">A's Flooring</h1>
        </div>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
        <button
          onClick={(e) => scrollToSection(e, "#about")}
          className="text-lg px-3 py-2 hover:text-[#F1C40F] transition font-medium"
        >
          About Us
        </button>
        <button
          onClick={(e) => scrollToSection(e, "#portfolio")}
          className="text-lg px-3 py-2 hover:text-[#F1C40F] transition font-medium"
        >
          Portfolio
        </button>
        <button
          onClick={(e) => scrollToSection(e, "#testimonials")}
          className="text-lg px-3 py-2 hover:text-[#F1C40F] transition font-medium"
        >
          Testimonials
        </button>
        <button
          onClick={(e) => scrollToSection(e, "#contact")}
          className="text-lg px-3 py-2 hover:text-[#F1C40F] transition font-medium"
        >
          Contact
        </button>
      </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Button Get a Quote */}
        <button
          onClick={(e) => scrollToSection(e, "#questionnaire")}
          className="hidden md:block bg-[#F1C40F] px-6 py-2 rounded-lg font-semibold hover:scale-105 active:scale-95 transition-transform shadow-md text-white"
        >
          Get a Quote
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#34495E] text-white py-4 space-y-4 text-center">
          <button onClick={(e) => scrollToSection(e, "#about")} className="block hover:text-[#F1C40F] transition">
            About Us
          </button>
          <button onClick={(e) => scrollToSection(e, "#portfolio")} className="block hover:text-[#F1C40F] transition">
            Portfolio
          </button>
          <button onClick={(e) => scrollToSection(e, "#testimonials")} className="block hover:text-[#F1C40F] transition">
            Testimonials
          </button>
          <button onClick={(e) => scrollToSection(e, "#contact")} className="block hover:text-[#F1C40F] transition">
            Contact
          </button>
          <button
            onClick={(e) => scrollToSection(e, "#questionnaire")}
            className="mt-2 bg-[#F1C40F] px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform text-gray-900"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
