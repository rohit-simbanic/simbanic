"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/theme-context";
import { useFormik } from "formik";
import { submitSchema } from "./schema";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function CTA() {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const [capVal, setCapVal] = useState<string | null>(null);

  const displayMessage = (msg: React.SetStateAction<string>) => {
    setMessage(msg);
  };
  const formRef = useRef<HTMLFormElement | null>(null);
  const initialValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: submitSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );

        emailjs
          .sendForm(
            "service_ni20i9z",
            "template_ae8cnim",
            formRef.current!,
            "eQQC42DFdbeLgYxAU"
          )
          .then(
            (result) => {
              console.log(result.text);

              displayMessage("Your message was sent successfully!");
              window.location.reload();
            },
            (error) => {
              console.log(error.text);
              displayMessage("Failed to send message. Please try again.");
            }
          );

        action.resetForm();
      },
    });

  useEffect(() => {
    const clearMessage = () => setMessage("");

    if (message) {
      const timerId = setTimeout(clearMessage, 5000);

      return () => clearTimeout(timerId);
    }
  }, [message]);
  return (
    <>
      <section className="cta py-[80px] overlay__cta" id="contact">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 grid-cols-12 sm:gap-10 items-center relative">
            <div className="lg:col-span-6 md:col-span-6"></div>
            <div className="lg:col-span-6 md:col-span-6 col-span-full">
              <div className="max-w-xxl p-10 bg-white opacity-[0.8] sm:opacity-[1] rounded-[60px] shadow-md mx-2">
                <h2 className="text-[30px] font-semibold mb-1 font-graphik text-[#1A1A1A]">
                  How Can We Help?
                </h2>
                <div className="relative h-1 mb-3">
                  <div className="absolute inset-0 bg-gray-200 rounded-md"></div>
                  <div className="absolute inset-0 bg-[#2D83A6] w-1/3 rounded-md"></div>
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div>
                      <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="name"
                        value={values.name}
                        className="w-full border border-solid border-[#EBEBEB] rounded-[12px] mt-2 p-4"
                        placeholder="Full Name *"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p className="text-[red] text-[12px] pl-2">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <input
                        type="text"
                        autoComplete="off"
                        name="company"
                        id="company"
                        value={values.company}
                        className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                        placeholder="Your Company Name *"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.company && touched.company ? (
                        <p className="text-[red] text-[12px] pl-2">
                          {errors.company}
                        </p>
                      ) : null}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                          placeholder="Your Email *"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <p className="text-[red] text-[12px] pl-2">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={values.phone}
                          className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.phone && touched.phone ? (
                          <p className="text-[red] text-[12px] pl-2">
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      className="w-full border border-solid border-[#EBEBEB] rounded-[12px] p-4"
                      rows={4}
                      placeholder="Your message *"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {errors.message && touched.message ? (
                      <p className="text-[red] text-[12px] pl-2">
                        {errors.message}
                      </p>
                    ) : null}
                    <div className="g-recaptcha">
                      <ReCAPTCHA
                        sitekey="6LdrB0MpAAAAAKhoOn7N-MyrJCVAUiFguNJaIRNa"
                        onChange={(val) => setCapVal(val)}
                      />
                    </div>
                  </div>
                  {message && (
                    <div className="text-[green] ml-2 flex gap-2">
                      <svg
                        width="20px"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="#588406"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M7.75 12L10.58 14.83L16.25 9.17004"
                            stroke="#588406"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      {message}
                    </div>
                  )}

                  <div className="mt-4">
                    <div className="flex justify-start py-0 active text-[#1E273B] dark:text-[#C4CDE1]">
                      <button
                        type="submit"
                        disabled={!capVal}
                        className={`flex items-center justify-center w-40 ${
                          theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                        }  ${
                          capVal ? "text-white" : "text-gray-400"
                        } py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
