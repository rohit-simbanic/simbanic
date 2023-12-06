"use client";
import React from "react";
import { services } from "@/data/data";
import SectionHeading from "./section-heading";
import Service from "./service";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Services() {
  const pathname = usePathname();
  return (
    <section className="services mt-[80px] bg-[#1B2335] relative">
      <div className="container mx-auto text-center lg:text-left">
        <p
          className={`text-[16px] ${
            pathname === "/" ? "text-[#FDB795]" : "text-[#D384FF]"
          } font-prompt pt-28 pb-7`}
        >
          {pathname === "/"
            ? `${services.subheading}`
            : `${services.subheadingServices}`}
        </p>
        <SectionHeading>
          {pathname === "/" ? (
            <span
              className="text-white text-[40px] leading-[134%]"
              dangerouslySetInnerHTML={{ __html: services.heading }}
            />
          ) : (
            <p className="text-white text-[40px] leading-[134%]">
              <span className="text-[#B272FF]">Simbanic</span> Service Offerings
            </p>
          )}
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
