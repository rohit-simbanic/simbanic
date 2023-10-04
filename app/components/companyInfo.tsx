import React from "react";
import { companyInfo } from "@/data/data";
import SectionHeading from "./section-heading";

export default function CompanyInfo() {
  return (
    <>
      {companyInfo.map((info, index) => (
        <div
          key={index}
          className={`py-8 ${
            index !== companyInfo.length - 1
              ? "md:border-r md:border-gray-300"
              : ""
          }`}
        >
          <SectionHeading>{info.heading}</SectionHeading>
          <p className="text-[#4A505F] font-normal text-[20px]">
            {info.description}
          </p>
        </div>
      ))}
    </>
  );
}
