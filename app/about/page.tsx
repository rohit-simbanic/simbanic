"use client";
import React from "react";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import SectionHeading from "../components/section-heading";
import { blogData } from "@/data/data";
import Image from "next/image";
import { useTheme } from "../context/theme-context";
import CompanyInfo from "../components/companyInfo";
import Carousel from "../components/carousel";
import Tabs from "../components/tabs";
import { Team } from "../components/Team";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <section className="about-page">
      <Helmet>
        <title>About | Simbanic</title>
        <meta
          name="description"
          content="Simbanic, an digital company offer its strategic design, engineering, and industry capabilities for building digital transformation of the organization"
        />
      </Helmet>
      <div className="container mx-auto px-5 xl:px-0 mb-[45px]">
        <div className="text-center mt-[45px] relative pt-[53px] bg-[url('../public/images/services/productEng/slider-shadow.svg')] -z-20 bg-no-repeat bg-[center_top_0rem]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE]">
              <span className="heading-red dark:text-[#A65CFF]">
                Empowering Business{" "}
              </span>{" "}
              With Software Engineering
              <br /> Agile in Culture and Mindset.
            </span>
          </SectionHeading>
          {/* <Image
            src={require("@/public/images/contact/slider.svg")}
            alt={""}
            width={438}
            height={500}
            className={`w-[100%] mx-auto h-[219px] sm:h-[464px]`}
          /> */}
          <div className=" md:w-4/5 mx-auto">
            <p className="text-[#4A505F] dark:text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%] my-3">
              Welcome to Simbanic, where we pioneer the intersection of
              technology and business excellence. Established in 2015, we are
              more than a product engineering company; we&#39;re architects of
              tailored solutions for complex software engineering challenges.
              From dynamic startups to Fortune 500 companies, we&#39;ve
              partnered with diverse organizations, delivering impactful
              results.
            </p>
            <p className="text-[#4A505F] dark:text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%] my-3">
              In our Product Innovation Center, we redefine the role of
              engineering, transforming potential bottlenecks into growth
              catalysts. Through expertise in DevOps, cloud-native development,
              and quality engineering services, we help you navigate and conquer
              critical business challenges.
            </p>
            <p className="text-[#4A505F] dark:text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%] my-3">
              What sets us apart is our Remote Agile Teams – dedicated engineers
              seamlessly integrated into your project, preserving your company
              culture and aligning with strategic objectives. Our goal is not
              just to meet expectations but to exceed them, fostering a
              collaborative journey towards success.
            </p>
            <p className="text-[#4A505F] dark:text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%] my-3">
              Join us in embracing the future. At Simbanic, we don&#39;t just
              navigate the waves of change; we create them.
            </p>
          </div>
        </div>
        <div className="text-center mt-[40px]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE] max-md:text-[30px] max-md:leading-[92%]">
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
              TRUSTED BY +15 BUSINESSEs
            </h4>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:gap-10 xl:gap-20 mt-16">
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
        </div> */}
        {/* <Team /> */}
      </div>

      <CTA />
      <Footer />
      <Copyright />
    </section>
  );
};

export default ContactPage;
