"use client";
import About from "./components/about";
import Copyright from "./components/copyright";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Slider from "./components/slider";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Digital Product Engineering & IT Talent Solutions Company | Simbanic
        </title>
        <meta
          name="description"
          content="Simbanic, an digital company offer its strategic design, engineering, and industry capabilities for building digital transformation of the organization"
        />
      </Helmet>
      <main>
        <Slider />
        <About />
        <Services />
        <Portfolio />
        <CTA />
        <Footer />
        <Copyright />
      </main>
    </>
  );
}
