"use client";
import Carousel from "@/app/components/carousel";
import Copyright from "@/app/components/copyright";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";
import Portfolio from "@/app/components/portfolio";
import ServiceSlider from "@/app/components/serviceSlider";
import Services from "@/app/components/services";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet";

const page = () => {
  return (
    <>
      <Helmet>
        <title>Software Performance Engineering Services | Simbanic</title>
        <meta
          name="description"
          content="Simbanic, an digital company offer its strategic design, engineering, and industry capabilities for building digital transformation of the organization"
        />
      </Helmet>
      <ServiceSlider />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="-z-10 relative px-5"
      >
        <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
          Overcoming Scalability Challenges: Application Performance Engineering
          Services for
          <br /> Enhanced Performance
        </h3>
        <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
          Performance engineering practices enable products to excel in high
          load scenarios. Predictive performance
          <br /> analysis identifies bottlenecks and optimizes application
          performance. This builds confidence in deployment,
          <br /> alleviating concerns and ensuring optimal performance under
          heavy workloads.
        </p>
      </motion.div>
      <section className="slider mt-[56px] mb-[80px]">
        <div className="container mx-auto">
          <div>
            <div>
              <h4 className="uppercase text-center font-graphik font-semibold text-[14px] mt-24 mb-9 dark:text-white">
                TRUSTED BY +15 BUSINESSEs
              </h4>
            </div>
            <div>
              <Carousel />
            </div>
          </div>
          <div className="md:mt-[110px] mt-4 max-w-screen-xl px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center md:px-9">
              <div className="md:col-span-5 order-1 md:order-2">
                <div className="lg:ms-8 flex justify-center">
                  <Image
                    src={require("@/public/images/services/performanceEng/performance-capabilities.png")}
                    alt=""
                    width={561}
                    height={315}
                    className="w-[36%]"
                  />
                </div>
              </div>

              <div className="md:col-span-7 order-2 md:order-1">
                <div className="lg:me-5">
                  <h3 className="mb-4 text-[#162753] text-[20px] max-md:text-center font-prompt leading-[160%] font-semibold dark:text-white">
                    Capabilities
                  </h3>

                  <p className="text-[#A8ADB3] font-prompt text-[16px] max-sm:text-center leading-[160%] max-md:text-center">
                    Our comprehensive service portfolio includes world-class
                    performance engineering services that utilize a dual-shift
                    approach, delivering increased ROI and faster product
                    delivery. We recognize the significance of building flawless
                    products that excel under extreme loads, as the absence of
                    robust performance can have lasting impacts on your product
                    and services.
                  </p>
                </div>
              </div>
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
