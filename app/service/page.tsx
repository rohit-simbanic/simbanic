"use client";
import React from "react";
import SectionHeading from "../components/section-heading";
import Carousel from "../components/carousel";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import Services from "../components/services";
import { Helmet } from "react-helmet";

const page = () => {
  return (
    <section className="service-slider mt-[56px]">
      <Helmet>
        <title>Software Services Listing | Simbanic</title>
        <meta
          name="description"
          content="Simbanic, an digital company offer its strategic design, engineering, and industry capabilities for building digital transformation of the organization"
        />
      </Helmet>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 justify-items-center relative pt-[53px] bg-[url('../public/images/services/productEng/slider-shadow.svg')] -z-20 bg-no-repeat bg-[center_top_0rem]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE] text-center">
              Elevating CRM Excellence with SuiteCRM{" "}
              <span className="text-[#B272FF]">Services</span>
            </span>
          </SectionHeading>
          <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
            Elevate your business with our SuiteCRM services, tailored to
            empower your CRM journey
            <br /> with excellence and innovation
          </p>
        </div>
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
      </div>
      <Services />
      <CTA />
      <Footer />
      <Copyright />
    </section>
  );
};

export default page;
