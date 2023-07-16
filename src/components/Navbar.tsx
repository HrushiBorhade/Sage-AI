import { FC } from "react";
import Image from "next/image";
interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-center w-full h-16">
      {" "}
      <Image
        src="/sage-4.png"
        alt="sage"
        priority={true}
        width={50}
        height={50}
        className="self-center inline mb-2 scale-125 cursor-pointer hover:scale-150 "
      />
    </div>
  );
};

export default Navbar;
