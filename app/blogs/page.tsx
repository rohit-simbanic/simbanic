"use client";
import React from "react";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import SectionHeading from "../components/section-heading";
import { blogData } from "@/data/data";
import Image from "next/image";
import { useTheme } from "../context/theme-context";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  const { theme } = useTheme();
  return (
    <section>
      <Helmet>
        <title>Blog | Simbanic</title>
        <meta
          name="description"
          content="Simbanic, an digital company offer its strategic design, engineering, and industry capabilities for building digital transformation of the organization"
        />
      </Helmet>
      <div className="container mx-auto ">
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
      </div>
      <CTA />
      <Footer />
      <Copyright />
    </section>
  );
};

export default BlogPage;
