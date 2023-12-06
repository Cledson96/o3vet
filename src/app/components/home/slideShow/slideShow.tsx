"use client";

import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Image from "next/image";

import banner1 from "public/img/banner/banner01.jpg";
import banner2 from "public/img/banner/banner02.jpg";
import banner3 from "public/img/banner/banner03.jpg";

export default function SlideShow() {
  const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  const imagens = [banner1, banner2, banner3];

  return (
    <>
      <div className="relative">
        <Zoom {...zoomOutProperties}>
          {imagens.map((each, index) => {
            return <Image key={index} src={each} alt="o3vet" />;
          })}
        </Zoom>
      </div>
    </>
  );
}
