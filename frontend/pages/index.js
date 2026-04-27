import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutServices from "../components/AboutServices";
import Questionnaire from "../components/Questionnaire";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingSocialMenu from "@/components/FloatingSocialMenu";
import Services from "../components/Services";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* About + Certification + Services */}
      <section id="about" data-aos="fade-up">
        <AboutServices />
      </section>

      {/*Services */}
      <section id="Services" data-aos="fade-up">
        <Services />
      </section>

      {/* Portfolio */}
      <section id="portfolio" data-aos="fade-up">
        <Portfolio />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Questionnaire / CTA */}
      <section id="questionnaire">
        <Questionnaire />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>

      <FloatingSocialMenu />
      <StickyMobileCTA />
    </>
  );
}
