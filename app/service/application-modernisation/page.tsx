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
          <div className="md:mt-[110px] mt-4 max-w-screen-xl px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center md:px-9">
              <div className="md:col-span-5 order-1 md:order-2">
                <div className="lg:ms-8 flex justify-center">
                  <Image
                    src={require("@/public/images/services/applicationModern/application-modernisation.png")}
                    alt=""
                    width={761}
                    height={415}
                    className="w-[76%]"
                  />
                </div>
              </div>

              <div className="md:col-span-7 order-2 md:order-1">
                <div className="lg:me-5">
                  <h3 className="mb-4 text-[#162753] text-[20px] max-md:text-center font-prompt leading-[160%] font-semibold dark:text-white">
                    Capabilities
                  </h3>

                  <p className="text-[#A8ADB3] font-prompt text-[16px] max-sm:text-center leading-[160%] max-md:text-center">
                    The team at Simbanic excels in collaborating with
                    organizations of all sizes to revamp their applications. We
                    assess your existing workloads and guide you in creating a
                    comprehensive digital transformation roadmap that
                    encompasses recommended architecture, a complete
                    modernization strategy, and a business proposal featuring
                    anticipated ROI and savings in total cost of ownership
                    (TCO).
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
