import React from "react";
import { services } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <>
      {services.servicesItem.map((service, i) => (
        <div
          className="w-full px-4 py-6 group transition-transform transform hover:scale-105 cursor-pointer"
          key={service.id}
        >
          <div className="relative flex flex-col sm:flex-row gap-[36px] items-start group-hover:bg-[#0000001a] group-hover:bg-opacity-[0.1] group-hover:rounded-lg p-4 text-left">
            <Image
              src={service.logoUrl}
              alt={service.name}
              width={70}
              height={70}
            />

            <div>
              <h3 className="text-[25px] font-medium text-white leading-[134%] w-6 font-graphik dark:text-gray-100">
                {service.name}
              </h3>
              <p className="text-[14px] text-[#748CA3] w-3/4 my-5 font-prompt font-light leading-[134%] dark:text-gray-400">
                {service.description}
              </p>
              <Link
                href="/"
                className="text-white text-[14px] font-medium font-graphik"
              >
                Read more..
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
