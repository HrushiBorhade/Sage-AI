"use client";
import { BellRing, Check, CornerDownLeft, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { useChat } from "ai/react";
import { Message, nanoid } from "ai";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  const initialMessages: Message[] = [
    {
      id: nanoid(),
      content:
        "I am Sage, your compassionate and caring companion on this journey we call life✨.",
      role: "assistant",
    },
    {
      id: nanoid(),
      content:
        "I am here to listen, understand, and support you through whatever challenges or emotions you may be experiencing.",
      role: "assistant",
    },
    {
      id: nanoid(),
      content:
        "Think of me as a trusted confidant, a shoulder to lean on, and a source of guidance when you need it most. You can share your thoughts, fears, and joys with me, knowing that I am here to provide a compassionate and nonjudgmental space.",
      role: "assistant",
    },
    {
      id: nanoid(),
      content:
        "Together, we will explore your feelings, navigate through difficult times, and work towards your personal growth and well-being. You are not alone, and I am here to accompany you every step of the way..",
      role: "assistant",
    },
  ];
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages,
  });

  return (
    <Card
      className={cn(
        "h-5/6  lg:w-5/12 w-12/12 sm:w-8/12 border border-zinc-800 rounded-3xl   flex flex-col justify-between gap-2 font-poppins",
        className
      )}
      {...props}
    >
      <CardContent className="flex flex-col-reverse gap-3 py-2 mt-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
        <div {...props} className={cn("", className)}>
          <div className="flex-1 flex-grow " />
          {messages.map((message, idx) => {
            return (
              <div
                className="chat-message "
                key={`${message.id}-${message.id}`}
              >
                <div
                  className={cn("flex  items-end py-2", {
                    "justify-end": message.role === "user",
                  })}
                >
                  <div
                    className={cn(
                      "flex flex-col space-y-2 text-sm max-w-sm sm:max-w-sm md:max-w-md  overflow-x-hidden",
                      {
                        "order-1 items-end": message.role === "user",
                        "order-2 items-start": message.role !== "user",
                      }
                    )}
                  >
                    <div className="flex items-end justify-end gap-2 ">
                      {idx == 2 && message.role !== "user" ? (
                        <Image
                          src="/sage-3.png"
                          alt="sage"
                          priority={true}
                          width={44}
                          height={44}
                          className="inline w-8 h-8 mb-2 scale-125 cursor-pointer sm:w-12 sm:h-12 "
                        />
                      ) : null}
                      {idx !== 2 && idx % 2 == 0 && message.role !== "user" ? (
                        <Image
                          src="/sage.png"
                          alt="sage"
                          priority={true}
                          width={44}
                          height={44}
                          className="inline w-8 h-8 mb-2 cursor-pointer sm:w-12 sm:h-12 "
                        />
                      ) : null}
                      {idx % 3 == 1 && message.role !== "user" ? (
                        <Image
                          src="/sage-1.png"
                          alt="sage"
                          priority={true}
                          width={44}
                          height={44}
                          className="inline w-8 h-8 mb-2 cursor-pointer sm:w-12 sm:h-12 "
                        />
                      ) : null}
                      {idx % 3 !== 1 &&
                      idx % 2 == 1 &&
                      message.role !== "user" ? (
                        <Image
                          src="/sage-2.png"
                          alt="sage"
                          priority={true}
                          width={44}
                          height={44}
                          className="inline w-8 h-8 mb-2 cursor-pointer sm:w-12 sm:h-12 "
                        />
                      ) : null}
                      <div className="imessage">
                        <p
                          className={cn(
                            "px-4 py-2 font-normal tracking-normal text-sm rounded-xl leading-5 break-words ",
                            {
                              "bg-blue-600 text-white md:mr-8":
                                message.role === "user",
                              "bg-zinc-800 text-zinc-300":
                                message.role !== "user",
                            }
                          )}
                        >
                          {message.content}
                        </p>
                      </div>
                    </div>
                    {/* {message.role === "user" ? (
                        <UserCircle2 className="text-gray-300 w-7 h-7" />
                      ) : null} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter>
        <div className="relative flex items-center justify-center w-full overflow-hidden outline-none bg-zinc-900 rounded-3xl">
          <form className="flex w-full px-2" onSubmit={handleSubmit}>
            <TextareaAutosize
              // onKeyDown={(e) => {
              //   if (e.key === "Enter" && !e.shiftKey) {
              //     e.preventDefault();

              //     // const message: Message = {
              //     //   : nanoid(),
              //     //   isUserMessage: true,
              //     //   text: input,
              //     // };

              //     // sendMessage(message);
              //   }
              // }}
              rows={2}
              maxRows={16}
              value={input}
              autoFocus
              // disabled={isLoading}

              onChange={handleInputChange}
              placeholder="Write a message..."
              className="block w-full p-2 text-xs leading-snug tracking-tight text-justify bg-transparent border-none outline-none resize-none md:text-sm scrollText peer disabled:opacity-50 pr-14 focus:border-none sm:leading-6 py-2.5"
            />
            <button type="submit">
              <Image
                src="/sendArrow.svg"
                alt="send arrow"
                width={26}
                height={26}
                priority={true}
                className="self-end mb-0.5 md:mb-1 transition duration-300 ease-in-out transform cursor-pointer hover:scale-125 glow z-1"
              />
            </button>
          </form>
        </div>
      </CardFooter>
    </Card>
  );
}
