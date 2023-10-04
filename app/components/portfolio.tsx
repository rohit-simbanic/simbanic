import React from "react";
import CompanyInfo from "./companyInfo";
import PortfolioItem from "./portfolioItem";
import Testimonial from "./testimonial";
import Blog from "./blog";

export default function Portfolio() {
  return (
    <section className="portfolio pt-[80px] bg-[#FDF8F4] relative dark:bg-[#0E0421]">
      <div className="container mx-auto">
        <div className="w-full lg:w-[68%] mx-auto relative">
          <div className="bg-[#dbd7fb] absolute top-[0rem] hidden 3xl:block z-0 right-[-13rem] h-[15rem] w-[24rem] rounded-full blur-[4rem] sm:w-[36.75rem] md:right-[-13rem] lg:right-[-13rem] xl:right-[-13rem] 2xl:right-[-13rem] dark:bg-[#676394] dark:blur-[11rem]"></div>
          <div className="bg-[#fbe2e3] absolute top-[13rem] hidden 3xl:block z-0 right-[-13rem] h-[17.25rem] w-[25.25rem] rounded-full blur-[4rem] sm:w-[36.75rem] dark:bg-[#946263] dark:blur-[11rem]"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center border border-white relative bg-[#EAF5FF] bg-opacity-[0.7] rounded-2xl md:rounded-full">
            <CompanyInfo />
          </div>
        </div>
        <PortfolioItem />
        <Testimonial />
        <Blog />
      </div>
    </section>
  );
}
