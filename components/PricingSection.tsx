import React from "react";
import CustomButton from "./CustomButton";
import { cn } from "@/lib/utils";
import { PeachIcon, CheckIcon } from "@/Svgs";
import { ChevronRight } from "lucide-react";

type PricingCardProps = {
  title: string;
  subTitle: string;
  price: string;
  features: string[];
  highlight?: boolean;
  productID: string;
};

const CARD = [
  {
    subTitle: "Basic",
    productID: "65b7c4b8e3852",
    title: "OnlyFans Leaks",
    price: "19.99",
    highlight: false,
    features: [
      "Instant Access",
      "One time payment",
      "10 to 25 models each day",
      "Trending TikTok girls",
      "All PPV content",
    ],
  },
  {
    subTitle: "Max",
    productID: "65b7c48715dd9",
    title: "Mega Pack",
    price: "34.99",
    features: [
      "Access within seconds",
      "One time payment",
      "50 to 100 models each day",
      "OnlyFans & SnapChat pack",
      "Trending adult stars & celebs",
      "Teen Leaks",
      "Custom model requests",
    ],
    highlight: true,
  },
  {
    subTitle: "Pro",
    productID: "65b7c4e5556f7",
    title: "SnapChat Leaks",
    price: "24.99",
    features: [
      "Instant Access",
      "One time payment",
      "Mass videos and pics",
      "Leaked My Eyes Only Videos",
      "Amateur models included",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <div className="mt-2 sm:mt-5 md:mt-10 lg:mt-10 mb-10">
      <div className="flex flex-col items-center">
        <p className="text-white text-2xl lg:text-6xl font-bold md:text-4xl sm:text-2xl">
          Curated content tiers
        </p>
        <p className="text-white text-2xl lg:text-6xl font-bold md:text-4xl sm:text-2xl">
          for <span className="text-[#ba94ff]">your pleasure</span>
        </p>
        <p className="text-[#99a1b4] text-center mt-2">
          With over 5,000+ Models and 50TB+ of content, we are sure to have what
          you are looking for.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {CARD.map((item, index) => {
          return (
            <PricingCard
              title={item.title}
              price={item.price}
              subTitle={item.subTitle}
              key={item.title + index}
              features={item.features}
              highlight={item.highlight}
              productID={item.productID}
            />
          );
        })}
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  subTitle,
  highlight = false,
  productID,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative mt-10 flex flex-col mx-auto max-w-[350px] w-full text-center text-white bg-[#0d0c0e] rounded-xl shadow dark:bg-[#0d0c0e] dark:text-white "
      )}
    >
      {highlight && (
        <div className="h-w-[90px] w-[90px]  absolute -right-2 -top-2 rotate-45 ">
          <PeachIcon />
        </div>
      )}
      <div className="bg-[#17171b] p-8 rounded-tr-xl rounded-tl-xl">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p
          className={cn(
            "font-semibold text-gray-500 sm:text-lg dark:text-gray-400"
          )}
        >
          {subTitle}
        </p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">{`$${price}`}</span>
          <span className={cn("text-gray-500 dark:text-gray-400 font-bold")}>
            USD
          </span>
        </div>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left flex-1 p-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-3">
            <div className="h-w-5 w-5 text-green-600">
              <CheckIcon />
            </div>
            <span className="">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="w-full px-5 pb-5">
        <button
          type="submit"
          data-sellix-product={productID}
          className={cn(
            "rounded-full bg-[#a374f7] py-4 flex flex-row items-center gap-2 justify-center font-semibold hover:bg-[#a374f7]/80 duration-200 w-full"
          )}
        >
          <span>Purchase</span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
