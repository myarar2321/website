"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  desc: string;
  type: string;
  title: string;
  onPress: (id: string) => void;
  image: React.ReactNode;
};

const ICON_SIZE = 50;

const ITEMS = [
  {
    title: "Largest Selection of Models.",
    desc: "With our packages you get access to over 5,000 models and all PPV content. 50 to 100 Models and top OfF creators are added each day!",
    image: (
      <Image
        src="/recruitment.png"
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt="Recruitment"
      />
    ),
    type: "display",
  },
  {
    title: "Over 1,500+ Members in the Community.",
    desc: "Each day new members join the community and get instant access to the largest selection of models and creators, all in one place.",
    image: (
      <Image
        src="/group.png"
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt="Group"
      />
    ),
    type: "display",
  },
  {
    title: "Rated 5 out Of 5 stars with 125+.",
    desc: "We take pride in our reviews and try to output the best content for you.",
    image: (
      <Image
        src="/toprated.png"
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt="Top Rated"
      />
    ),
    type: "display",
  },
  {
    title: "What are you waiting for?",
    desc: "",
    image: "",
    type: "click",
  },
];

function WhyJoinUs() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="text-white w-full text-2xl lg:text-4xl font-bold md:text-4xl sm:text-2xl ">
        Why Join Us?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
        {ITEMS.map((item, index) => {
          return (
            <Card
              desc={item.desc}
              type={item.type}
              title={item.title}
              image={item.image}
              key={`Card-${index}`}
              onPress={scrollToSection}
            />
          );
        })}
      </div>
    </div>
  );
}

const Card = ({ title, image, desc, type, onPress }: CardProps) => {
  if (type === "click") {
    return (
      <div className="px-8 border border-[#0f0e0e] hover:transition duration-200 hover:border-[#ba94ff] flex flex-col justify-center items-center py-10 rounded-2xl bg-[#0f0e0e]">
        <div className="text-white text-center text-lg ">
          <p className="font-semibold mt-5">{title}</p>
        </div>
        <div
          onClick={() => onPress("purchase")}
          className="inline-block bg-[#ba94ff] mt-5 group rounded-full border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`text-lg text-center font-semibold w-auto`}>
            Join Now!
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="px-8 border border-[#0f0e0e] hover:transition duration-200 hover:border-[#ba94ff] py-10 rounded-2xl bg-[#0f0e0e]">
      <div className=""> {image}</div>
      <div className="text-white text-lg ">
        <p className="font-semibold mt-5">{title}</p>
        <p className="text-sm mt-5 text-[#929ab1]">{desc}</p>
      </div>
    </div>
  );
};

export default WhyJoinUs;
