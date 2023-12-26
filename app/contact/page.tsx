import React from "react";
import SectionHeading from "../components/section-heading";
import Form from "../components/form";
import Image from "next/image";

const page = () => {
  return (
    <section className="relative pt-[53px] bg-[url('../public/images/services/productEng/slider-shadow.svg')] -z-20 bg-no-repeat bg-[center_top_0rem]">
      <div className="container mx-auto px-5 xl:px-0 mb-[45px]">
        <div className="text-center mt-[45px]">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE]">
              Connect with{" "}
              <span className="text-[#e40059] dark:text-[#A65CFF]">
                Simbanic:
              </span>{" "}
              SuiteCRM
              <br />
              Specialists
            </span>
          </SectionHeading>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center px-1 sm:px-0">
          <Form />
          <div>
            <Image
              src={require("@/public/images/contact/help.svg")}
              alt="help"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="text-center">
          <SectionHeading>
            <span className="dark:text-[#E5EDFE]">
              We love to{" "}
              <span className="text-[#e40059] dark:text-[#A65CFF]">
                collab{" "}
              </span>{" "}
              with, Let’s do
              <br /> great together!
            </span>
          </SectionHeading>
        </div>
      </div>
    </section>
  );
};

export default page;
