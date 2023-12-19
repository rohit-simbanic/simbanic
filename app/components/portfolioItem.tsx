/* eslint-disable react/no-unescaped-entities */
"use client";

import { portfolioItem } from "@/data/data";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PortfolioItem() {
  const { theme } = useTheme();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="text-center relative">
      <div className="bg-[#dbd7fb] absolute top-[21rem] z-0 left-[-23rem] h-[15rem] w-[24rem] rounded-full blur-[4rem] sm:w-[36.75rem] md:left-[-23rem] lg:left-[-23rem] xl:left-[-23rem] 2xl:left-[-23rem] dark:bg-[#676394] dark:blur-[11rem]"></div>
      <div className="bg-[#fbe2e3] absolute top-[36rem] z-0 left-[-12rem] h-[25.25rem] w-[25.25rem] rounded-full blur-[4rem] sm:w-[36.75rem] dark:bg-[#946263] dark:blur-[11rem]"></div>
      <p className="text-[16px] mt-[52px] text-[#4262B6] font-prompt mb-10">
        {/* {portfolioItem.subheading} */}
      </p>
      <SectionHeading>
        <span className="dark:text-[#E5EDFE]">{portfolioItem.heading}</span>
      </SectionHeading>

      {portfolioItem.portfolioItems.map((item, index) => (
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
          key={index}
        >
          <div
            className={`w-full mx-auto text-center lg:text-left rounded-lg my-10 py-16 px-12 flex relative overflow-hidden ${
              index % 2 !== 0 ? "bg-[#FDF1F0]" : "bg-[#E5EDFF]"
            }`}
          >
            <div className="w-full lg:w-1/2">
              <h3 className="relative font-semibold text-[#111827] text-[24px] font-graphik mb-4">
                {item.name}
              </h3>
              <p className="text-[18px] text-[#4A505F] mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printe
              </p>
              <div className="flex gap-2 justify-center lg:justify-start">
                <Link href="/" className="text-[#141414] text-[16px] font-bold">
                  Contact Us
                </Link>
                <Image
                  src={require("@/public/images/portfolio/arrow.svg")}
                  width={24}
                  height={24}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="portfolio_images">
              <Image
                src={item.photoURL}
                width={500}
                height={400}
                alt="arrow"
                className={`hidden transition hover:scale-[1.04] lg:block absolute -right-10  ${
                  index % 2 !== 0
                    ? "bottom-0 hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2"
                    : "top-7 hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2"
                }`}
              />
            </div>
          </div>
        </motion.div>
      ))}

      <Link
        href="/"
        className="flex justify-center py-8 active text-[#1E273B] dark:text-[#C4CDE1]"
      >
        <span
          className={`flex items-center justify-center w-52 ${
            theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
          }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
        >
          View All Portfolio
        </span>
      </Link>
    </div>
  );
}
