import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import RegisterLoginNavbar from "~/components/RegisterLoginNavbar";
import { IoIosArrowDown } from "react-icons/io";

const buttonStyle =
  "flex cursor-pointer items-center gap-[20px] border-2 border-solid border-black p-2 bg-white rounded-md";

const RegistrationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Question 1 Submission</title>
        <meta
          name="description"
          content="Akmal Anuar's solution for regovtech graduate-take-home-assignment Question 1."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterLoginNavbar routeName={"register"} />
      <main className="flex min-h-screen flex-col items-center bg-[#F7F9FB]">
        <div className="mt-6">
          <div className="p-4">
            <form action="" className="flex flex-col">
              <div className="text-center text-[20px] font-bold">
                Register new account
              </div>
              <div className="mt-4 flex flex-col">
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="h-[45px] w-[363px] rounded-md"
                  />
                </div>
                <div className="mt-[10px] flex flex-col gap-[10px]">
                  <label htmlFor="username" className="font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="h-[45px] w-[363px] rounded-md"
                  />
                </div>
                <div className="mt-[10px] flex flex-col gap-[10px]">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="h-[45px] w-[363px] rounded-md"
                  />
                </div>
                <div className="mt-[10px] flex flex-col gap-[10px]">
                  <label htmlFor="re-enter_password" className="font-medium">
                    Re-enter password
                  </label>
                  <input
                    type="text"
                    name="re-enter_password"
                    className="h-[45px] w-[363px] rounded-md"
                  />
                </div>
                <div className="mt-[10px] flex flex-col gap-[10px]">
                  <label htmlFor="dateofbirth" className="font-medium">
                    Date of birth
                  </label>
                  <div className="flex w-[363px] justify-between">
                    <div className={buttonStyle}>
                      Day <IoIosArrowDown />
                    </div>
                    <div className={buttonStyle}>
                      Month <IoIosArrowDown />
                    </div>
                    <div className={buttonStyle}>
                      Year <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="mt-12 flex flex-col">
                    <button className="w-[363px] cursor-pointer items-center justify-center gap-[20px] rounded-md border-2 border-solid border-[#00C649] bg-[#00C649] p-2 text-center text-white">
                      Continue
                    </button>
                    <Link
                      href={""}
                      className="mt-[10px] text-[16px] font-medium text-[#3E51FA]"
                    >
                      Already have an account?
                    </Link>
                    <p className="mt-[11px] text-[12px]">
                      By registering, you agree to the
                      <Link
                        href={""}
                        className="text-[12px] font-medium text-[#3E51FA]"
                      >
                        {" "}
                        Terms of Service
                      </Link>{" "}
                      and
                      <Link
                        href={""}
                        className="text-[12px] font-medium text-[#3E51FA]"
                      >
                        {" "}
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
