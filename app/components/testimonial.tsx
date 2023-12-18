import { testimonialData } from "@/data/data";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <div className="text-center">
        <p className="text-[16px] mt-[56px] text-[#4262B6] font-prompt mb-10">
          {testimonialData.subheading}
        </p>
        <SectionHeading>
          <span className="dark:text-[#E5EDFE]">{testimonialData.heading}</span>
        </SectionHeading>
      </div>
      <div className="flex flex-col lg:flex-row bg-white rounded-[18px] border border-solid border-[#4C4C4C] items-center relative mt-10">
        <Image
          src={testimonialData.quoteIcon}
          alt="quoteIcon"
          className="absolute top-[-59px] left-[63px]"
        />
        <div className="py-8 ps-8 pr-8 sm:ps-12 sm:pr-12 md:ps-16 md:pr-16 lg:pr-0 w-full lg:w-2/3">
          <p className="text-[18px] text-[#4C4C4C] leading-[160%] mb-14">
            {testimonialData.description}
          </p>
          <h5 className="text-[24px] text-[#1A1A1A] font-graphik font-semibold">
            {testimonialData.clientName}
          </h5>
          <p className="text-[18px] text-[#4C4C4C] font-graphik font-normal my-3">
            {testimonialData.designation}
          </p>
          <Image src={testimonialData.linkedIn} alt="linkedin" />
        </div>
        <div className="relative w-full mx-auto lg:w-1/3">
          <div className="bg-[#dbd7fb] hidden sm:block absolute top-[7rem] z-0 h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[33.75rem] right-[0rem] dark:bg-[#676394]"></div>
          <Image
            src={testimonialData.clientPhoto}
            alt="client"
            className="relative z-0"
          />
        </div>
      </div>
    </>
  );
}
