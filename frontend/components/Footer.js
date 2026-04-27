export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-20">
      {/* CTA strip */}
      <div className="bg-neutral-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-300">
              Ready to start?
            </p>
            <p className="text-sm md:text-base text-white/85">
              Upgrade your floors with professional installation from A&apos;s Flooring Inc.
            </p>
          </div>

          <a
            href="#questionnaire"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.22em] uppercase text-white mb-3">
                A&apos;s Flooring Inc.
              </h3>
              <p className="text-sm text-white/75 mb-3">
                Residential &amp; commercial flooring installation across San Diego and surrounding areas.
              </p>
              <p className="text-xs text-white/60 mb-3">
                Quality materials, clean installations, and attention to detail in every job.
              </p>
              <p className="text-xs text-white/60">
                CSLB License <span className="font-semibold text-white/80">#1151690</span>
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.22em] uppercase text-white mb-3">
                Contact
              </h3>
              <p className="text-sm text-white/75 mb-2">
                <span className="mr-1.5">📍</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1840+Jason+St+San+Diego+CA+92154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  1840 Jason St, San Diego, CA 92154
                </a>
              </p>
              <p className="text-sm text-white/75 mb-2">
                <span className="mr-1.5">📞</span>
                <a
                  href="tel:+16192076864"
                  className="hover:text-white transition"
                >
                  +1 (619) 207-6864
                </a>
              </p>
              <p className="text-sm text-white/75">
                <span className="mr-1.5">📧</span>
                <a
                  href="mailto:a.flooringg@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  a.flooringg@gmail.com
                </a>
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.22em] uppercase text-white mb-3">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-white/75">
                <li>Hardwood &amp; vinyl plank installation</li>
                <li>Laminate flooring</li>
                <li>Stairs &amp; transitions</li>
                <li>Floor leveling &amp; preparation</li>
                <li>Removal &amp; demolition</li>
              </ul>
            </div>

            {/* Links + Social */}
            <div>
              <h3 className="text-sm font-semibold tracking-[0.22em] uppercase text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm mb-5">
                <li>
                  <a href="#portfolio" className="text-white/75 hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/75 hover:text-white transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#questionnaire" className="text-white/75 hover:text-white transition">
                    Get a Quote
                  </a>
                </li>
              </ul>

              <h4 className="text-xs font-semibold tracking-[0.22em] uppercase text-white mb-2">
                Follow
              </h4>
              <p className="text-xs text-white/60 mb-3">
                See recent projects on social media.
              </p>

              <div className="flex gap-3">
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=61570835871480&mibextid=wwXIfr&mibextid=wwXIfr",
                    icon: "/facebook-icon.png",
                    alt: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/asflooring_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
                    icon: "/Instagram-icon.png",
                    alt: "Instagram",
                  },
                  {
                    href: "https://www.tiktok.com/@asflooring2?_t=8sfS5rxyvqp&_r=1",
                    icon: "/tiktok-icon.webp",
                    alt: "TikTok",
                  },
                ].map((s) => (
                  <a
                    key={s.alt}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition"
                  >
                    <img src={s.icon} alt={s.alt} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
            © {year} A&apos;s Flooring Inc. All rights reserved. &nbsp;·&nbsp; CSLB License #1151690
          </div>
        </div>
      </div>
    </footer>
  );
}
