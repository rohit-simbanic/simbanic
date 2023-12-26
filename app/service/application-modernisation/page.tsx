"use client";
import Carousel from "@/app/components/carousel";
import Copyright from "@/app/components/copyright";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";
import Portfolio from "@/app/components/portfolio";
import ServiceSlider from "@/app/components/serviceSlider";
import Services from "@/app/components/services";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceSlider />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="-z-10 relative px-5"
      >
        <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
          Revamp Your Legacy App Landscape: Embrace Application Modernization
          Services for Enhanced <br />
          Performance
        </h3>
        <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
          By utilizing Simbanic’s app modernization expertise, businesses can
          benefit from improved decision-making, heightened <br />
          security, and cost reduction, all of which are at the core of
          innovation.
        </p>
      </motion.div>
      <section className="slider mt-[56px] mb-[80px]">
        <div className="container mx-auto">
          <div>
            <div>
              <h4 className="uppercase text-center font-graphik font-semibold text-[14px] mt-24 mb-9 dark:text-white">
                TRUSTED BY +250 BUSINESSEs
              </h4>
            </div>
            <div>
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
