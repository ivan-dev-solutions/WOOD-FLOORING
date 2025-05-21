import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Certification from "../components/Certification";
import Questionnaire from "../components/Questionnaire";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Services from "../components/Services"
import WhatWeDo from "@/components/WhatWeDo";
import FloatingSocialMenu from "@/components/FloatingSocialMenu";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <section id="about" data-aos="fade-up">
        <AboutUs />
      </section>

      <section id="certification">
        <Certification />
      </section>
      <WhatWeDo />
      <hr className="my-20 border-t border-gray-200" />
    
      <Services /> 
      <hr className="my-20 border-t border-gray-200" />


      <section id="questionnaire">
        <Questionnaire />
      </section>

      <section id="portfolio" data-aos="fade-up">
        <Portfolio />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Footer />
      </section>
      <FloatingSocialMenu />

    </>
  );
}
