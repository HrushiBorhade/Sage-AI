import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";

import localFont from "next/font/local";
export const metadata: Metadata = {
  title: "Sage.ai",
  description: "Your Mental Health Companion✨",
};
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"],
});
export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600"],
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.className,
          fontSans.variable,
          fontPoppins.className,
          fontPoppins.variable,
          fontMontserrat.className,
          fontMontserrat.variable,
          fontHeading.variable,
          fontHeading.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
