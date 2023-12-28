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
      <section className="cta py-[40px]">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-12 grid-cols-12 sm:gap-10 relative">
            <div className="md:col-span-4 sm:col-span-6 col-span-12">
              <Link href="/" className="flex mb-6">
                <Image
                  className="sm:w-150"
                  src={theme === "dark" ? logoDark : logoLight}
                  alt="logo"
                  width={200}
                  height={36}
                  priority={true}
                />
              </Link>
              <div className="flex gap-3 mb-3 items-start">
                <Image
                  src={require("@/public/images/footer/map.svg")}
                  width={24}
                  height={24}
                  alt={""}
                />
                <div>
                  {footerData.footerDetails.map((details, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <p className="text-[17px] text-[#4C4C4] dark:text-[#E5EDFE] font-prompt font-bold">
                        {details.country}
                      </p>
                      <p className="text-[16px] text-[#4C4C4] dark:text-[#E5EDFE] font-graphik font-normal my-1 w-2/3">
                        {details.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
                  <p className="text-[#4C4C4C] text-[14px] font-graphik font-normal dark:text-[grey]">
                    Call Us
                  </p>
                  <span className="text-[16px] text-[1A1A1A] dark:text-gray-100">
                    {footerData.phone.map((number, i) => (
                      <Link href={`tel:${number.num}`} key={i}>
                        <p className="flex gap-2 my-2">
                          <Image
                            src={number.img}
                            alt="fla"
                            width={24}
                            height={9}
                          />
                          {number.num}
                        </p>
                      </Link>
                    ))}
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
                  <p className="text-[#4C4C4C] text-[14px] font-graphik font-normal dark:text-[grey]">
                    Email Us
                  </p>
                  <span className="text-[16px] text-[1A1A1A] dark:text-gray-100">
                    {footerData.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <h4 className="text-[#1A1A1A] font-semibold font-graphik text-[24px] dark:text-white mb-3 sm:mb-5 mt-6 sm:mt-0">
                Services
              </h4>
              {footerData.footerLinks.map((footerLink, index) => (
                <Link
                  key={index}
                  className="text-[#1A1A1A] text-[16px] font-graphik font-normal dark:text-[#E5EDFE] leading-9 hover:font-bold"
                  href={footerLink.hash}
                >
                  <p>{footerLink.linkName}</p>
                </Link>
              ))}
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <h4 className="text-[#1A1A1A] font-semibold font-graphik text-[24px] dark:text-white mb-3 sm:mb-5 mt-6 sm:mt-0">
                Company
              </h4>
              {footerData.companyInfo.map((footerLink, index) => (
                <Link
                  key={index}
                  href={
                    footerLink.pages === "Contact Us"
                      ? "/contact"
                      : `${footerLink.hash}`
                  }
                  className="text-[#1A1A1A] text-[16px] font-graphik font-normal dark:text-[#E5EDFE] leading-9 hover:font-bold"
                >
                  <p>{footerLink.pages}</p>
                </Link>
              ))}
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <h4 className="text-[#1A1A1A] font-semibold font-graphik text-[24px] dark:text-white mb-3 sm:mb-5 mt-6 sm:mt-0">
                Quick Links
              </h4>
              {footerData.siteLinks.map((footerLink, index) => (
                <Link
                  key={index}
                  href="/sitemap.xml"
                  className="text-[#1A1A1A] text-[16px] font-graphik font-normal dark:text-[#E5EDFE] leading-9 hover:font-bold"
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
