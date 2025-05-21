import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Smooth scroll to section via hash
    const handleHashChange = () => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    // ✅ Init AOS (Animate On Scroll)
    AOS.init({
      duration: 1000, // Duration of animations
      once: true,     // Only animate once per element
    });

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
