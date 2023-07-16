import { Hero } from "@/components/Hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
    // <div className="container flex items-center justify-center w-full h-screen">
    //   <Link
    //     className={cn(
    //       buttonVariants({
    //         variant: "default",
    //       }),
    //       "rounded-xl  p-8 font-semibold underline underline-offset-2 bg-black text-white  hover:bg-white border hover:text-black tracking-tight  text-lg"
    //     )}
    //     href="/chat"
    //   >
    //     <h1 className="text-3xl font-bold font-heading ">Sage</h1>
    //   </Link>
    // </div>
  );
}
