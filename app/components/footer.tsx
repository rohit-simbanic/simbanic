"use client";
import React from "react";
import { useTheme } from "../context/theme-context";
import Link from "next/link";
import Image from "next/image";
import logoLight from "@/public/images/logoLight.svg";
import logoDark from "@/public/images/logoDark.svg";
import { footerData } from "@/data/data";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <>
      <section className="cta py-[80px]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 grid-cols-12 gap-10 relative">
            <div className="md:col-span-4 col-span-6 mx-5">
              <Link href="/" className="">
                <Image
                  className="h-16 sm:w-232"
                  src={theme === "dark" ? logoDark : logoLight}
                  alt="logo"
                  width={232}
                  height={36}
                  priority={true}
                />
              </Link>
              <p className="text-[16px] text-[#4C4C4] dark:text-[#E5EDFE] font-graphik font-normal my-7">
                {footerData.footerDetails}
              </p>
              <div className="flex gap-3 my-6">
                <div>
                  <Image
                    src={require("@/public/images/footer/phone.svg")}
                    width={24}
                    height={24}
                    alt={""}
                  />
                </div>
                <div>
                  <p className="text-[#4C4C4C] text-[14px] font-graphik font-normal">
                    Call Us
                  </p>
                  <span className="text-[16px] text-[1A1A1A] dark:text-gray-100">
                    {footerData.phone}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <Image
                    src={require("@/public/images/footer/email.svg")}
                    width={24}
                    height={24}
                    alt={""}
                  />
                </div>
                <div>
                  <p className="text-[#4C4C4C] text-[14px] font-graphik font-normal">
                    Email Us
                  </p>
                  <span className="text-[16px] text-[1A1A1A] dark:text-gray-100">
                    {footerData.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 col-span-6 mx-5">
              <h4 className="text-[#1A1A1A] font-semibold font-graphik text-[24px] dark:text-white mb-5">
                Services
              </h4>
              {footerData.footerLinks.map((footerLink, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-[#1A1A1A] text-[16px] font-graphik font-normal dark:text-[#E5EDFE] leading-9"
                >
                  <p>{footerLink.linkName}</p>
                </Link>
              ))}
            </div>
            <div className="md:col-span-3 col-span-6 mx-5">
              <h4 className="text-[#1A1A1A] font-semibold font-graphik text-[24px] dark:text-white mb-5">
                Company
              </h4>
              {footerData.companyInfo.map((footerLink, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-[#1A1A1A] text-[16px] font-graphik font-normal dark:text-[#E5EDFE] leading-9"
                >
                  <p>{footerLink.pages}</p>
                </Link>
              ))}
            </div>
            <div className="md:col-span-2 col-span-6 mx-5">
              <h4 className="text-[#1A1A1A] font-semibold font-graphik text-[24px] dark:text-white mb-5">
                Quick Links
              </h4>
              {footerData.siteLinks.map((footerLink, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-[#1A1A1A] text-[16px] font-graphik font-normal dark:text-[#E5EDFE] leading-9"
                >
                  <p>{footerLink.links}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
