export default function Footer() {
  return (
    <footer className="bg-[#D6B88C] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Contact Us</h3>
          <p className="opacity-80">📍 San Diego and surrounding areas</p>
          <p className="opacity-80">📞 +1 (619) 207-6864</p>
          <p className="opacity-80">📧  sa2connects@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#portfolio" className="hover:text-[#F1C40F] transition">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-[#F1C40F] transition">Testimonials</a></li>
            <li><a href="#questionnaire" className="hover:text-[#F1C40F] transition">Get a Quote</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61570835871480&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" className="h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/asflooring_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src="/Instagram-icon.png" alt="Instagram" className="h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@asflooring2?_t=8sfS5rxyvqp&_r=1" target="_blank" rel="noopener noreferrer">
              <img src="/tiktok-icon.webp" alt="Twitter" className="h-10 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center opacity-70">
        <p>© {new Date().getFullYear()} A's Flooring. All rights reserved.</p>
      </div>
    </footer>
  );
}
