"use client";
import About from "@/app/components/about";
import Carousel from "@/app/components/carousel";
import CloudConsulting from "@/app/components/cloud/cloudConsulting";
import CloudMigration from "@/app/components/cloud/cloudMigration";
import DemonstratedExpertise from "@/app/components/cloud/demonstratedExpertise";
import Copyright from "@/app/components/copyright";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";
import Portfolio from "@/app/components/portfolio";
import ServiceSlider from "@/app/components/serviceSlider";
import Services from "@/app/components/services";
import React from "react";
import { Helmet } from "react-helmet";

const page = () => {
  return (
    <>
      <Helmet>
        <title>Software Cloud Engineering Services | Simbanic</title>
        <meta
          name="description"
          content="Simbanic, an digital company offer its strategic design, engineering, and industry capabilities for building digital transformation of the organization"
        />
      </Helmet>
      <ServiceSlider />

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
        </div>
      </section>
      <About />
      <DemonstratedExpertise />
      <CloudConsulting />
      <Services />
      <CloudMigration />
      <Portfolio />
      <CTA />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
