import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-[45px] font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827]">
      {children}
    </h2>
  );
}
