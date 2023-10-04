"use client";
import { blogData } from "@/data/data";
import React from "react";
import SectionHeading from "./section-heading";
import { useTheme } from "../context/theme-context";

export default function CTA() {
  const { theme } = useTheme();
  return (
    <>
      <section className="cta py-[80px] overlay__cta">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 grid-cols-12 sm:gap-10 items-center relative">
            <div className="lg:col-span-6 md:col-span-6"></div>
            <div className="lg:col-span-6 md:col-span-6 col-span-full">
              <div className="max-w-xxl p-10 bg-white opacity-[0.8] sm:opacity-[1] rounded-[60px] shadow-md mx-2">
                <h2 className="text-[30px] font-semibold mb-1 font-graphik text-[#1A1A1A]">
                  How Can We Help?
                </h2>
                <div className="relative h-1 mb-3">
                  <div className="absolute inset-0 bg-gray-200 rounded-md"></div>
                  <div className="absolute inset-0 bg-[#2D83A6] w-1/3 rounded-md"></div>
                </div>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full border border-solid border-[#EBEBEB] rounded-[12px] mt-2 p-4"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="companyName"
                        className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="email"
                          id="email"
                          className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                          placeholder="Your Email"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea
                      id="message"
                      className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                      rows={4}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-end py-0 active text-[#1E273B] dark:text-[#C4CDE1]">
                      <span
                        className={`flex items-center justify-center w-40 ${
                          theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                        }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
                      >
                        Submit
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
