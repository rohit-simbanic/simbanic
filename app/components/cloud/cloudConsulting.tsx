"use client";
import React from "react";
import SectionHeading from "../section-heading";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/app/context/theme-context";

export default function CloudConsulting() {
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <section className="cloudconsulting my-[80px] relative">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 items-center">
          <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
            <span className="dark:text-[#E5EDFE] text-center">
              <span className="text-[#B272FF]">Cloud</span> Consulting Services
            </span>
          </h2>

          <div>
            <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
              Scalable Cloud Native Application Development Services for
              Business Growth
            </h3>
            <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
              By leveraging extensive tooling, development techniques, and
              adopting a cloud-native approach, we can simplify
              <br /> operations, build and deliver with speed and seamlessly
              weave security into your software delivery process.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-30 xl:gap-56 my-28">
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/capabilities-2.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>

          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px]">
              <span className="dark:text-[#E5EDFE]">Capabilities</span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[20px] my-4 mx-auto lg:mx-0">
              Cloud consulting services typically include a range of offerings
              to helporganizations optimize their cloud strategy, architecture,
              and operations
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
                {pathname === "/" ? "Contact us" : "Get started"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
