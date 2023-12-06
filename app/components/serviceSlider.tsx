"use client";

import { useTheme } from "../context/theme-context";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceSlider() {
  const { theme } = useTheme();

  return (
    <section className="service-slider mt-[56px] mb-[80px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-items-center relative pt-[53px] bg-[url('../public/images/services/productEng/slider-shadow.svg')] bg-no-repeat bg-[center_top_0rem]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="-z-10 relative"
          >
            <SectionHeading>
              <span className="dark:text-[#E5EDFE] text-center">
                Software{" "}
                <span className="text-[#B272FF]">Product Engineering</span>{" "}
                Services
              </span>
            </SectionHeading>
          </motion.div>
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
            <Image
              src={require("@/public/images/services/productEng/slider.svg")}
              className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
              alt={""}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
