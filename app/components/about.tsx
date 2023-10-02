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
    <section className="slider my-[80px]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div>
            <div className="flex justify-start">
              <Image
                src={require("@/public/images/marketingStrategy.svg")}
                className="w-[100%] lg:w-[86%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            </div>
          </div>
          <div>
            <SectionHeading>
              <span className="dark:text-[#E5EDFE]">
                Join us on this <br />
                exciting journey
              </span>
            </SectionHeading>

            <p className="w-1/2">
              Our team consists of seasoned professionals with diverse technical
              backgrounds. From software development and data analytics to
              cybersecurity and AI, we have the expertise ...
            </p>
            <Link
              href="/"
              className="block py-7 active text-[#1E273B] dark:text-[#C4CDE1]"
            >
              <span
                className={`flex items-center justify-center w-52 ${
                  theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                }  text-white py-4 px-0 rounded-[14px]`}
              >
                <MdEmail className="mr-2" />
                Contact us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
