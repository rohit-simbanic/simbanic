"use client";
import React from "react";
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Image from "next/image";
import SectionHeading from "./components/section-heading";
import Link from "next/link";
import { useTheme } from "./context/theme-context";

const ErrorPage = () => {
  const { theme } = useTheme();
  return (
    <section className="error-page">
      <div className="container mx-auto px-5 xl:px-0 mb-[45px]">
        <div className=" flex justify-center">
          <Image src={require("@/public/images/404.svg")} alt="" />
        </div>
        <div className="text-center mt-[45px]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE] text-[30px] leading-[92%]">
              It seems you&#39;ve taken a wrong turn on the data highway.
            </span>
          </SectionHeading>
          <div className="flex justify-center">
            <Link
              href="/"
              className="block py-8 active text-[#1E273B] dark:text-[#C4CDE1] "
            >
              <span
                className={`flex items-center justify-center w-52 ${
                  theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
              >
                Go Back
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </section>
  );
};

export default ErrorPage;
