"use client";
import { CardDemo } from "@/components/Card";
import { Copy } from "@/components/Copy";
import Image from "next/image";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Chat() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 px-2 font-sans bg-black ">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className="flex items-center justify-center animate-fade-in [--animation-delay:100ms] opacity-0 translaye-y-[-10px] "
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <h1 className="font-heading tracking-tight flex items-center justify-center  transition transform text-white font-bold text-4xl sm:text-5xl ease-in-out mr-8  duration-200  cursor-pointer hover:scale-[120%]  ">
            <div>
              {isShown ? (
                <Image
                  src="/sage.png"
                  alt="sage"
                  priority={true}
                  width={50}
                  height={50}
                  className="self-center inline mb-2 scale-150 cursor-pointer hover:scale-150 "
                />
              ) : (
                <Image
                  src="/sage-4.png"
                  alt="sage"
                  priority={true}
                  width={50}
                  height={50}
                  className="self-center inline mb-2 scale-125 cursor-pointer hover:scale-150 "
                />
              )}
            </div>
            Sage
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-base font-normal text-muted-foreground font-poppins">
            Rediscover Mental Wellbeing
          </p>
          <div className="flex">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Copy />
                </TooltipTrigger>
                <TooltipContent className="bg-black rounded-xl">
                  <p className="font-heading">Share</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center justify-center p-0.5 bg-blue-600 rounded-full hover:bg-blue-700">
                    <span className="w-8 font-bold text-center text-white h-7 hover:text-zinc-300">
                      ?
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-black rounded-xl w-[300px]">
                  <p className="font-heading">
                    Sage<span>&apos;</span>s simple to use!Just type your
                    message in the field below, click send & Say Goodbye to Your
                    Mental Struggles with Sage
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <CardDemo className="bg-black opacity-0 [--animation-delay:700ms]  animate-fade-up " />
    </div>
  );
}
