"use client";

import React from "react";
import { cn } from "@/lib/utils";

type CustomButtonProps = {
  title: string;
  className?: string;
  textClass?: string;
  onPress?: () => void;
};

function CustomButton({
  title,
  className,
  textClass,
  onPress,
}: CustomButtonProps) {
  return (
    <div
      onClick={onPress}
      className={cn(
        "bg-[#ba94ff] group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
        className
      )}
    >
      <h2 className={cn(`text-2xl font-semibold`, textClass)}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
    </div>
  );
}

export default CustomButton;
