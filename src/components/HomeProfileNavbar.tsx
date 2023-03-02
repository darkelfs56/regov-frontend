import Link from "next/link";
import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface HomeProfileNavbarProps {
  routeName?: String;
}

const HomeProfileNavbar: FC<HomeProfileNavbarProps> = ({
  routeName = "profile",
}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-4 pb-0">
          <div className="ml-4">Logo here</div>
          <div className="mr-4 flex cursor-pointer items-center gap-[20px] border-2 border-solid border-black p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            English
            <IoIosArrowDown />
          </div>
        </div>
        <div className="flex justify-center gap-24 text-2xl">
          {routeName == "home" && (
            <>
              <Link href={""} className="cursor-pointer text-[#00C649]">
                Home <hr className="h-1 bg-[#00C649]" />
              </Link>
              <Link href={""} className="cursor-pointer">
                Profile
              </Link>
            </>
          )}
          {routeName == "profile" && (
            <>
              <Link href={""} className="cursor-pointer">
                Home
              </Link>
              <Link href={""} className="cursor-pointer text-[#00C649]">
                Profile <hr className="h-1 bg-[#00C649]" />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeProfileNavbar;
