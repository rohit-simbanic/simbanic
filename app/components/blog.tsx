"use client";
import { blogData } from "@/data/data";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/theme-context";

export default function Blog() {
  const { theme } = useTheme();
  return (
    <>
      <div className="text-center mt-[45px]">
        <SectionHeading>
          <span className="dark:text-[#E5EDFE]">{blogData.heading}</span>
        </SectionHeading>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 items-center relative px-1 sm:px-0">
        {blogData.blogItesm.map((item, index) => (
          <div key={index}>
            <Image src={item.blogImage} className="w-full" alt={""} />
            <div className="flex flex-row justify-between items-center mt-4">
              <span className="text-[16px] font-medium text-[#0E61B3] uppercase border border-solid border-[#C9C9C9] rounded-full py-4 px-8">
                {item.tag}
              </span>
              <p className="text-[16px] text-[#3F4249] font-medium dark:text-[#4A505F]">
                {item.date}
              </p>
            </div>
            <h4 className="uppercase font-graphik text-[20px] mt-5 mb-6 font-semibold text-[#111827] h-20 w-[98%] dark:text-white">
              {item.title}
            </h4>
            <hr />
            <div className="flex justify-start items-center gap-6 py-6">
              <Image
                src={item.author}
                className="w-[60px] lg:w-[60px]"
                alt={""}
              />
              <div>
                <h4 className="font-graphik font-semibold text-[16px] text-[#111827] dark:text-gray-200">
                  {item.authorName}
                </h4>
                <p className="text-[16px] text-[#111827] dark:text-gray-400">
                  {item.designation}
                </p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Link
        href="/"
        className="flex justify-center py-16 active text-[#1E273B] dark:text-[#C4CDE1]"
      >
        <span
          className={`flex items-center justify-center w-52 ${
            theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
          }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
        >
          View All Blogs
        </span>
      </Link>
    </>
  );
}
