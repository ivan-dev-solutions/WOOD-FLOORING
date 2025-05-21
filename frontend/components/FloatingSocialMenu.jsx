import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPlus, FaTimes } from "react-icons/fa";

export default function FloatingSocialMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col items-end gap-3 mb-2 transition-all duration-300">
          <a
            href="https://wa.me/16192076864?text=Hi!%20I%20would%20like%20to%20get%20a%20flooring%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/asflooring_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570835871480&mibextid=wwXIfr&mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
        aria-label="Toggle social menu"
      >
        {open ? <FaTimes /> : <FaPlus />}
      </button>
    </div>
  );
}
