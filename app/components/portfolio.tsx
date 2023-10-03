import React from "react";
import CompanyInfo from "./companyInfo";

export default function Portfolio() {
  return (
    <section className="portfolio pt-[80px] bg-[#FDF8F4] relative dark:bg-[#0E0421]">
      <div className="w-full lg:w-[68%] mx-auto text-center lg:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center border border-white relative bg-[#EAF5FF] bg-opacity-[0.7] rounded-2xl md:rounded-full">
          <CompanyInfo />
        </div>
      </div>
    </section>
  );
}
