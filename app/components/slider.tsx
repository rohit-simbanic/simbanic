"use client";

import { useTheme } from "../context/theme-context";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import memberOne from "@/public/images/memberOne.svg";
import memberTwo from "@/public/images/memberTwo.svg";
import memberThree from "@/public/images/memberThree.svg";
import memberFour from "@/public/images/memberFour.svg";
import star from "@/public/images/star.png";
import { motion } from "framer-motion";
import Carousel from "./carousel";

export default function Slider() {
  const { theme } = useTheme();

  return (
    <section className="slider mt-[56px] mb-[80px]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center relative">
          <div className="pr-0 lg:pr-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="-z-10 relative"
            >
              <SectionHeading>
                <span className="dark:text-[#E5EDFE]">
                  Empowering <br />
                  Business{" "}
                  <span className="text-[#FFCCB2] dark:text-[#A65CFF]">
                    With
                  </span>{" "}
                  <br />
                  Software Engineering
                </span>
              </SectionHeading>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -23 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -23 }}
              className="font-prompt font-normal text-[20px] dark:text-[#A0A0A0] -z-10 relative"
            >
              Agile in Culture and Mindset.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Link
                href="/"
                className="block active text-[#1E273B] dark:text-[#C4CDE1] my-7"
              >
                <span
                  className={`flex justify-center items-center font-bold rounded-[14px] w-[212px] m-auto lg:m-0 h-[52px] hover:scale-[1.05] transition-all ${
                    theme === "dark" ? "bg-white" : "bg-[#FFDBBE]"
                  }  text-[#592CBA] dark:text-[#EC2F79] py-2 px-1`}
                >
                  <AiFillGithub className="mr-2 dark:text-[#FF6B23]" />
                  View Us On Github
                </span>
              </Link>
            </motion.div>

            <div className="flex my-5 justify-center lg:justify-start">
              <div className="flex ">
                <Image src={memberOne} className="w-[48px] h-[48px]" alt={""} />

                <Image
                  src={memberTwo}
                  className="w-[48px] h-[48px] relative -left-3"
                  alt={""}
                />
                <Image
                  src={memberThree}
                  className="w-[48px] h-[48px] relative -left-6"
                  alt={""}
                />
                <Image
                  src={memberFour}
                  className="w-[48px] h-[48px] relative -left-9"
                  alt={""}
                />
              </div>
              <div className="star_review">
                <div className="flex">
                  <Image src={star} className="w-[18px] h-[18px]" alt={""} />
                  <Image src={star} className="w-[18px] h-[18px]" alt={""} />
                  <Image src={star} className="w-[18px] h-[18px]" alt={""} />
                  <Image src={star} className="w-[18px] h-[18px]" alt={""} />
                  <Image src={star} className="w-[18px] h-[18px]" alt={""} />
                </div>
                <p className="text-[14px] font-prompt mt-2 dark:text-[#4A505F]">
                  Loved by thousands
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
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
                src={require("@/public/images/working_man.svg")}
                className="w-[100%] lg:w-[100%] pr-0 lg:pr-[5.5rem]"
                alt={""}
              />
            </motion.div>
          </div>
        </div>
        <div>
          <div>
            <h4 className="uppercase text-center font-graphik font-semibold text-[14px] mt-24 mb-9">
              TRUSTED BY +250 BUSINESSEs
            </h4>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}
