"use client";
import React from "react";
import Image from "next/image";

export default function DemonstratedExpertise() {
  return (
    <section className="expertise my-[80px] relative">
      <div className="container mx-auto px-5">
        <h2 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
          <span className="dark:text-[#E5EDFE]">
            Demonstrated Expertise in Leading the Paradigm Shift to the Cloud
          </span>
        </h2>

        <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
          Simbanic’s cloud-native development services have enabled
          organizations to rapidly innovate, adapt,
          <br /> and scale to meet evolving market demands. Our adept team of
          cloud architects and <br /> developersharness PaaS services to provide
          tailored solutions that encompass:
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-30 xl:gap-56 md:mt-10">
          <div className="title-text text-center lg:text-left">
            <div className="flex items-center gap-4">
              <Image
                src={require("@/public/images/services/cloudEng/check.svg")}
                className="w-[25] lg:w-[25]"
                alt={""}
              />
              <p className="dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
                <span className="text-[#162753] text-[18px] font-bold">
                  Agile Approach -{" "}
                </span>
                Uses the agile development methodologies tohave incremental,
                iterative deployments.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={require("@/public/images/services/cloudEng/check.svg")}
                className="w-[25] lg:w-[25]"
                alt={""}
              />
              <p className="dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
                <span className="text-[#162753] text-[18px] font-bold">
                  Microservices -{" "}
                </span>
                Reduced time-to-market through smaller units of deployment.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={require("@/public/images/services/cloudEng/check.svg")}
                className="w-[25] lg:w-[25]"
                alt={""}
              />
              <p className="dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
                <span className="text-[#162753] text-[18px] font-bold">
                  Containers -{" "}
                </span>
                Enables modular development and deployment through individual
                containers.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={require("@/public/images/services/cloudEng/check.svg")}
                className="w-[25] lg:w-[25]"
                alt={""}
              />
              <p className="dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
                <span className="text-[#162753] text-[18px] font-bold">
                  BDD Expertise -{" "}
                </span>
                Offering common language tests that help track changes in the
                system’s behavior and automate testing of business features.
              </p>
            </div>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/demonstrated.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
