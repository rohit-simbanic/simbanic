import React from "react";
import { services } from "@/data/data";
import SectionHeading from "./section-heading";
import Service from "./service";
import Image from "next/image";

export default function Services() {
  return (
    <section className="services mt-[80px] bg-[#1B2335] relative">
      <div className="container mx-auto text-center lg:text-left">
        <p className="text-[16px] text-[#FDB795] font-prompt pt-28 pb-7">
          {services.subheading}
        </p>
        <SectionHeading>
          <span
            className="text-white text-[40px] leading-[134%]"
            dangerouslySetInnerHTML={{ __html: services.heading }}
          />
        </SectionHeading>
        <p
          className="w-3/4 dark:text-[#D7D2D2] text-[#E4E4E4] leading-[150%] text-[18px] my-14 mx-auto lg:mx-0"
          dangerouslySetInnerHTML={{ __html: services.details }}
        />

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center relative pb-[113px] gap-2 lg:gap-14">
          <Service />
        </div>
      </div>
      <Image
        src={require("@/public/images/services/wave.svg")}
        className="w-[30%] lg:w-[32%] h-[7%] lg:h-[20%] absolute top-0 right-0"
        alt={""}
      />
    </section>
  );
}
