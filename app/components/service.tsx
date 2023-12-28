"use client";
import React from "react";
import { services } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import rectangle from "@/public/images/services/rectangle.svg";

export default function Service() {
  const pathname: string = usePathname();

  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    return words.slice(0, 7).join(" ");
  };

  return (
    <>
      {(pathname === "/" || pathname === "/service") && (
        <>
          {services.servicesItem.map((service, i) => (
            <Link href={service.url} key={service.id}>
              <div className="w-full px-4 py-6 group transition-transform transform hover:scale-105 cursor-pointer">
                <div className="relative flex flex-col sm:flex-row gap-[18px] sm:items-start items-center max-sm:text-center group-hover:bg-[#0000001a] group-hover:bg-opacity-[0.1] group-hover:rounded-lg p-4 text-left">
                  <Image
                    src={service.logoUrl}
                    alt={service.name}
                    width={70}
                    height={70}
                  />

                  <div className="">
                    <h3 className="text-[25px] font-medium text-white leading-[134%] w-6 font-graphik dark:text-gray-100 max-lg:w-full">
                      {service.name}
                    </h3>
                    <p className="text-[14px] text-[#748CA3] w-3/4 my-5 font-prompt font-light leading-[134%] dark:text-gray-400 max-lg:w-full">
                      {truncateDescription(service.description)}{" "}
                      {service.description.split(" ").length > 6 ? "..." : ""}
                    </p>
                    <div className="text-white text-[14px] font-medium font-graphik group-hover:text-[#e40059] group-hover:dark:text-[#A65CFF] relative sm:w-full w-[24%] mx-auto">
                      <span className="hidden group-hover:inline-block absolute top-[2px] left-[-24px]">
                        <Image
                          src={rectangle}
                          alt=""
                          className="w-4 h-4 mr-2"
                        />
                      </span>
                      Read more..
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
      {(pathname === "/service/product-engineering" ||
        pathname === "/service/performance-engineering" ||
        pathname === "/service/digital-experience" ||
        pathname === "/service/application-modernisation" ||
        pathname === "/service/cloud-engineering" ||
        pathname === "/service/quality-engineering") && (
        <>
          {services.servicesProductEngItem.map((service, i) => (
            <div
              className="w-full px-4 py-6 group transition-transform transform hover:scale-105 cursor-pointer"
              key={service.id}
            >
              <div
                className={`relative flex flex-col items-start group-hover:bg-[#0000001a] group-hover:bg-opacity-[0.1] group-hover:rounded-lg p-4 text-left`}
              >
                <>
                  <div className="flex gap-2 w-full items-center">
                    <Image
                      src={service.logoUrl}
                      alt={service.name}
                      width={70}
                      height={70}
                    />

                    <div className="w-[91%]">
                      <h3 className="text-[18px] font-medium text-white leading-[120%] font-graphik dark:text-gray-100">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#748CA3] my-5 font-prompt font-light leading-[134%] dark:text-gray-400">
                    {service.description}
                  </p>
                </>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
