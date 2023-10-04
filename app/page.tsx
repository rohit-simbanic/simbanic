import About from "./components/about";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Slider from "./components/slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
