import React, { useEffect, useRef } from "react";
import { clientsLogo } from "@/data/data";
import Image, { StaticImageData } from "next/image";
import styles from "./Carousel.module.css";
import { useTheme } from "../context/theme-context";

export default function Carousel() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.slider} dark:bg-[#0E0421]`}>
      <div
        className={`${styles["slider-before"]} ${styles["slider-edge"]}`}
      ></div>
      <div
        className={`${styles["slider-after"]} ${styles["slider-edge"]}`}
      ></div>
      <div className={`${styles["slide-track"]}`}>
        {clientsLogo.map((logo, i) => (
          <div key={i} className={`${styles["slide"]}`}>
            <Image
              src={logo.imageUrl}
              className={`${styles["carousel-image"]}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
