import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface RegisterLoginNavbarProps {
  routeName?: String;
}

const RegisterLoginNavbar: FC<RegisterLoginNavbarProps> = ({
  routeName = "register",
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
          {routeName == "register" && (
            <>
              <div className="cursor-pointer text-[#00C649]">
                Register <hr className="h-1 bg-[#00C649]" />
              </div>
              <div className="cursor-pointer">Login</div>
            </>
          )}
          {routeName == "login" && (
            <>
              <div className="cursor-pointer">Register</div>
              <div className="cursor-pointer text-[#00C649]">
                Login <hr className="h-1 bg-[#00C649]" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterLoginNavbar;
