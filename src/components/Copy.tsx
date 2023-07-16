"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";
import { Link2, Share2 } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { Badge } from "./ui/badge";
interface CopyProps {}

export const Copy: FC<CopyProps> = ({}) => {
  const [value, copy] = useCopyToClipboard();
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex p-2 rounded-full bg-zinc-800 hover:bg-blue-600">
          <button onClick={() => copy("https://sage-ai-hrushi.vercel.app/")}>
            <Share2 className="w-4 h-4 fit text-zinc-300 hover:text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black  h-[450px] w-[360px] flex items-center justify-center">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          <div>
            <Badge className="px-4 py-2 pb-3 mb-8 text-lg text-white bg-blue-700 hover:bg-blue-800 font-heading">
              sage-ai-hrushi.vercel.app
              <Link2 className="w-6 h-6 mt-1 ml-2 text-white" />
            </Badge>
          </div>
          <div>
            <DialogTitle className="mb-2 text-3xl font-heading">
              You<span>&apos;</span>ve copied the link!
            </DialogTitle>
            <DialogDescription>
              You can share this link with your friends.
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
