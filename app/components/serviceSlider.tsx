"use client";

import SectionHeading from "./section-heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ServiceSlider() {
  const pathname = usePathname();

  return (
    <section className="service-slider mt-[56px] mb-[80px]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 justify-items-center relative pt-[53px] bg-[url('../public/images/services/productEng/slider-shadow.svg')] -z-20 bg-no-repeat bg-[center_top_0rem]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="-z-10 relative"
          >
            <SectionHeading>
              <span className="dark:text-[#E5EDFE] text-center">
                Software{" "}
                <span className="text-[#B272FF]">
                  {pathname === "/service/product-engineering"
                    ? "Product Engineering"
                    : pathname === "/service/performance-engineering"
                    ? "Performance Engineering"
                    : pathname === "/service/digital-experience"
                    ? "Digital Experience Engineering"
                    : pathname === "/service/cloud-engineering"
                    ? "Cloud Engineering"
                    : pathname === "/service/application-modernisation"
                    ? "Application Modernisation"
                    : pathname === "/service/quality-engineering"
                    ? "Quality Engineering"
                    : ""}{" "}
                </span>{" "}
                Services
              </span>
            </SectionHeading>
          </motion.div>
          {pathname === "/service/cloud-engineering" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="-z-10 relative"
            >
              <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
                Scalable Cloud Native Application Development Services for
                Business Growth
              </h3>
              <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
                By leveraging extensive tooling, development techniques, and
                adopting a cloud-native approach, we can simplify
                <br /> operations, build and deliver with speed and seamlessly
                weave security into your software delivery process.
              </p>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {pathname === "/service/product-engineering" && (
              <Image
                src={require("@/public/images/services/productEng/slider.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            )}
            {pathname === "/service/performance-engineering" && (
              <Image
                src={require("@/public/images/services/performanceEng/slider.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            )}
            {pathname === "/service/digital-experience" && (
              <Image
                src={require("@/public/images/services/digitalExp/slider.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            )}
            {pathname === "/service/application-modernisation" && (
              <Image
                src={require("@/public/images/services/applicationModern/slider.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            )}
            {pathname === "/service/cloud-engineering" && (
              <Image
                src={require("@/public/images/services/cloudEng/slider.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            )}
            {pathname === "/service/quality-engineering" && (
              <Image
                src={require("@/public/images/services/automationEng/slider.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
