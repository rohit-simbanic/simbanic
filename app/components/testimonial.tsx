import { testimonialData } from "@/data/data";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <div className="text-center">
        <p className="text-[16px] mt-[100px] text-[#4262B6] font-prompt mb-10">
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
        <div className="py-8 ps-16 pr-16 lg:pr-0">
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
        <Image src={testimonialData.clientPhoto} alt="client" />
      </div>
    </>
  );
}
