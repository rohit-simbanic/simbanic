import { portfolioItem } from "@/data/data";
import React from "react";

export default function PortfolioItem() {
  return (
    <>
      <p className="text-[#4262B6] font-prompt text-[16px]">
        {portfolioItem.subheading}
      </p>

      {portfolioItem.portfolioItems.map((item, index) => (
        <div
          className="w-full lg:w-[68%] mx-auto text-center lg:text-left"
          key={index}
        ></div>
      ))}
    </>
  );
}
