"use client";
import { GithubIcon } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import Navbar from "./Navbar";
export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-hero_secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed z-10 flex flex-col items-center mb-12 left-1/2"
      >
        <Navbar />
        <div className="relative">
          <h1 className="text-5xl text-center font-heading sm:text-5xl md:text-6xl xl:text-7xl">
            Rediscover
            <Image
              className="absolute -rotate-12 -top-4 -left-12"
              src="/46.svg"
              width={32}
              height={32}
              alt="flower"
            />
          </h1>
          <div>
            <Image
              className="absolute w-16 h-16 -right-6 top-12 sm:w-20 md:w-24 md:h-24 sm:h-20 lg:top-0 "
              src="/flower.svg"
              width={75}
              height={75}
              alt="flower"
            />
            <h1 className="text-5xl text-center font-heading sm:text-5xl md:text-6xl xl:text-7xl">
              Mental Wellbeing
            </h1>
          </div>
        </div>
        {/* <a href="/chat" className="flex items-center text-lg text-hero_primary">
          <GithubIcon className="inline w-5 h-5 mr-2" />
          Import GitHub project
        </a> */}
        <Button />
      </motion.div>
    </motion.section>
  );
};
