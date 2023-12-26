"use client";
import React from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function About() {
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <section className="about mt-[50px] relative">
      {pathname === "/" && (
        <>
          <div className="bg-[#dbd7fb] hidden sm:block absolute top-[15rem] -z-20 left-[-35rem] h-[15rem] w-[24rem] rounded-full blur-[4rem] sm:w-[36.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:blur-[11rem]"></div>
          <div className="bg-[#fbe2e3] hidden sm:block absolute top-[16rem] -z-10 left-[1rem] h-[25.25rem] w-[25.25rem] rounded-full blur-[4rem] sm:w-[36.75rem] dark:bg-[#946263] dark:blur-[11rem]"></div>
        </>
      )}
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-30 xl:gap-56">
          <div className="about-img">
            <div className="flex justify-center">
              {pathname === "/" ? (
                <Image
                  src={require("@/public/images/marketingStrategy.svg")}
                  className="w-[100%] lg:w-[80%] pl-7 lg:pl-0"
                  alt={""}
                />
              ) : (
                <Image
                  src={require("@/public/images/services/cloudEng/capabilities.svg")}
                  className="w-[100%] lg:w-[80%] "
                  alt={""}
                />
              )}
            </div>
          </div>

          <div className="about-text text-center lg:text-left">
            {/* {pathname === "/" && (
              <p className="text-[16px] text-[#4262B6] mb-10">About us</p>
            )} */}
            <SectionHeading>
              <span className="dark:text-[#E5EDFE]">
                {pathname === "/"
                  ? "Join us on this exciting\njourney"
                  : "Capabilities"}
              </span>
            </SectionHeading>

            {pathname === "/" ? (
              <p className="w-3/4 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[20px] my-4 mx-auto lg:mx-0">
                Our team consists of seasoned professionals with diverse
                technical backgrounds. From software development and data
                analytics to cybersecurity and AI, we have the expertise ...
              </p>
            ) : (
              <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[20px] my-4 mx-auto lg:mx-0">
                Simbanic empowers organizations on their transformation journey
                withcutting-edge cloud application development services. Our
                unique cloudmanagement strategies and industrialized solutions
                enable firms acrossdiverse domains to rapidly build, test, and
                deploy cloud applications,enhancing their agility and
                competitiveness in the market.
              </p>
            )}
            <Link
              href="/contact"
              className="block py-8 active text-[#1E273B] dark:text-[#C4CDE1]"
            >
              <span
                className={`flex items-center justify-center w-52 ${
                  theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
              >
                <MdEmail className="mr-2 text-lg" />
                {pathname === "/" ? "Contact us" : "Get started"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
