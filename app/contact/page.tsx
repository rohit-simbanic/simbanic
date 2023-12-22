"use client";
import React from "react";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import SectionHeading from "../components/section-heading";
import { blogData } from "@/data/data";
import Image from "next/image";
import { useTheme } from "../context/theme-context";
import Testimonial from "../components/testimonial";
import CompanyInfo from "../components/companyInfo";
import Carousel from "../components/carousel";
import Tabs from "../components/tabs";
import { Team } from "../components/Team";

const ContactPage = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div className="container mx-auto px-5 xl:px-0 mb-[45px]">
        <div className="text-center mt-[45px]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE]">
              <span className="text-[#e40059] dark:text-[#A65CFF]">
                Simbanic
              </span>{" "}
              helps companies
              <br /> work better together
            </span>
          </SectionHeading>
          <Image
            src={require("@/public/images/contact/slider.svg")}
            alt={""}
            width={438}
            height={500}
            className="w-[100%] mx-auto h-[464px]"
          />
          <p className="text-[#D7D2D2] dark:text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
            Our team consists of seasoned professionals with diverse technical
            <br />
            backgrounds. From software development and data analytics to
            <br />
            cybersecurity and AI, we have the expertise ...
          </p>
        </div>
        <div className="text-center mt-[40px]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE]">
              Company&apos;s
              <br /> Accomplishments
            </span>
          </SectionHeading>
          <p className="text-[#A8ADB3] dark:text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%] mb-11">
            Over the years, simbanic has demonstrated an unwavering commitment
            to excellence,
            <br /> innovation, and customer satisfaction
          </p>
          <div className="w-full lg:w-[68%] mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center border border-white relative bg-[#EAF5FF] bg-opacity-[0.7] rounded-2xl md:rounded-full">
              <CompanyInfo />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4 className="uppercase text-center font-graphik font-semibold text-[14px] mt-24 mb-9 dark:text-[#4A505F]">
              TRUSTED BY +250 BUSINESSEs
            </h4>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:gap-10 xl:gap-20 my-16">
          <div className="about-img">
            <div className="flex justify-start">
              <Image
                src={require("@/public/images/contact/partner.svg")}
                className="w-[100%] lg:w-[80%] pl-7 lg:pl-0"
                alt={""}
              />
            </div>
          </div>

          <div className="about-text text-center lg:text-left">
            <SectionHeading>
              <span className="dark:text-[#E5EDFE]">
                Your Partner for <br />
                Software Innovation
              </span>
            </SectionHeading>

            <div className="my-8">
              <Tabs />
            </div>
          </div>
        </div>
        <Team />
        <Testimonial />
      </div>

      <CTA />
      <Footer />
      <Copyright />
    </section>
  );
};

export default ContactPage;
