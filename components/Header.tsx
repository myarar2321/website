"use client";

import React, { Fragment } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

type NavType = {
  title: string;
  id: string;
  type: string;
};

const NAV = [
  {
    title: "Products",
    id: "purchase",
    type: "click",
  },
  {
    title: "Twitter",
    id: "whyjoinus",
    type: "press",
  },
  {
    title: "Support",
    id: "",
    type: "press",
  },
];

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (item: NavType) => {
    switch (item.type) {
      case "click":
        scrollToSection(item.id);
        return;
      case "press":
        return;
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center lg:justify-start">
        {NAV.map((item, index) => {
          return (
            <div
              key={`Nav${index}`}
              onClick={() => handleClick(item)}
              className="lg:mr-10  rounded-md cursor-pointer hover:bg-[#6e4750] transition-colors duration-150 ease-out hover:ease-in"
            >
              <p className="text-white py-2 px-4">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="pb-10 md:pb-14 lg:pb-40 mt-5 sm:mt-10 md:mt-10 lg:mt-20 flex flex-col items-center justify-center h-full">
        <div className="flex w-full justify-between">
          <div className="flex  flex-col text-center md:text-start justify-center items-center  flex-1 text-white">
            <p className="w-full text-2xl lg:text-6xl font-bold md:text-4xl sm:text-2xl ">
              The New Standard For
            </p>
            <p className=" w-full lg:text-6xl pt-2 text-2xl md:text-4xl sm:text-2xl md:text-start">
              {`Quick-Service`}
            </p>
            <div className=" flex md:text-start justify-center lg:justify-start  w-full">
              <p className="pt-10  max-w-96  align-middle text-sm sm:text-base md:text-lg lg:text-xl ">
                {`OnlyFans is expensive. Don't worry, we've got you covered.
                Featuring over 5,000 top model collections, with us you will
                never have to buy another OnlyFans subscription!`}
              </p>
            </div>
          </div>
          <div className=" hidden sm:hidden md:block lg:block">
            <Image src="/logo.png" width={500} height={500} alt="logo" />
          </div>
        </div>
        <CustomButton
          title="Join Now"
          className="mt-10"
          onPress={() => scrollToSection("purchase")}
        />
        <div className="flex mt-5 items-center">
          <div>
            <Image src="/girls.png" width={160} height={150} alt="logo" />
          </div>
          <p className="text-white text-sm pl-5">
            {`Instant access to 5,000+ models`}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
