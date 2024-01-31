import React from "react";
import Link from "next/link";
import Image from "next/image";

const ITEMS = [
  { name: "Support", url: "https://t.me/operator123xd" },
  { name: "Products", url: "https://discord.com" },
  { name: "Discord", url: "https://discord.com" },
  { name: "Twitter", url: "https://twitter.com/kyeleaks" },
  { name: "Contact", url: "https://t.me/operator123xd" },
];

function Footer() {
  return (
    <footer className="w-full py-12 text-white md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl mb-2 md:mb-6 font-bold tracking-tighter sm:text-4xl">
              <Image
                className="mx-auto"
                width={80}
                height={80}
                src="/logowebsite.png"
                alt="website logo"
              />
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Get in touch with our support team for assistance.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly md:space-y-0 items-center space-y-4 mt-6 md:mt-8">
          {ITEMS.map((item, index) => {
            return (
              <div key={`footer${index}`} className="cursor-pointer">
                <Link
                  className="text-lg font-medium hover:underline underline-offset-4"
                  href={item?.url}
                >
                  {item?.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
