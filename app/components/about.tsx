"use client";

import React from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="about my-[80px]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-30 xl:gap-56">
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/marketingStrategy.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>

          <div className="about-text text-center lg:text-left">
            <p className="text-[16px] text-[#4262B6] mb-10">About us</p>
            <SectionHeading>
              <span className="dark:text-[#E5EDFE]">
                Join us on this exciting
                <br />
                journey
              </span>
            </SectionHeading>

            <p className="w-3/4 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[20px] my-4 mx-auto lg:mx-0">
              Our team consists of seasoned professionals with diverse technical
              backgrounds. From software development and data analytics to
              cybersecurity and AI, we have the expertise ...
            </p>
            <Link
              href="/"
              className="block py-8 active text-[#1E273B] dark:text-[#C4CDE1]"
            >
              <span
                className={`flex items-center justify-center w-52 ${
                  theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
              >
                <MdEmail className="mr-2 text-lg" />
                Contact us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
