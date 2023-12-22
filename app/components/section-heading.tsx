import { usePathname } from "next/navigation";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  const pathname = usePathname();
  return (
    <h2
      className={`text-[45px]
      font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] ${
        pathname === "/" ? "px-5" : ""
      }`}
    >
      {children}
    </h2>
  );
}
