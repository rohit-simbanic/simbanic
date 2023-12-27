import React from "react";
import SectionHeading from "../components/section-heading";
import Form from "../components/form";
import Image from "next/image";
import { contactInfo } from "@/data/data";
import GoogleMap from "../components/gmap";
import Footer from "../components/footer";
import Copyright from "../components/copyright";

const page = () => {
  return (
    <section className="contact-page">
      <div className="container mx-auto px-5 xl:px-0 mb-[45px]">
        <div className="text-center mt-[45px] relative pt-[53px] bg-[url('../public/images/services/productEng/slider-shadow.svg')] -z-20 bg-no-repeat bg-[center_top_0rem]">
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
          <div className="flex items-center justify-center">
            <Image
              src={require("@/public/images/contact/help.svg")}
              alt="help"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="text-center md:mt-[90px] mt-[10px]">
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 items-center px-1 sm:px-0">
          {contactInfo.map((contact, index) => (
            <div
              className="flex gap-3 bg-white dark:bg-[#251541] rounded-md py-7 px-5 h-40"
              key={index}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 dark:bg-[#211239] bg-[#f1ecf9] p-3 rounded-md">
                  <Image
                    src={contact.contactImg}
                    alt={contact.heading}
                    height={30}
                    width={30}
                  />
                </div>
                <div>
                  <h3 className="font-graphik dark:text-[#E5EDFE] font-bold mb-2">
                    {contact.heading}
                  </h3>
                  <p className="dark:text-[#D7D2D2] font-prompt text-[14px] font-regular">
                    {contact.details.includes("\n") ? (
                      contact.details.split("\n").map((phoneNumber, i) => (
                        <p
                          key={i}
                          className="dark:text-[#D7D2D2] font-prompt text-[14px] font-regular"
                        >
                          {phoneNumber}
                        </p>
                      ))
                    ) : (
                      <p className="dark:text-[#D7D2D2] font-prompt text-[14px] font-regular">
                        {contact.details}
                      </p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GoogleMap />
      <Footer />
      <Copyright />
    </section>
  );
};

export default page;
