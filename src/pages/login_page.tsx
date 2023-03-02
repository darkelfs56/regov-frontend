import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import RegisterLoginNavbar from "~/components/RegisterLoginNavbar";

const LoginPage: NextPage = () => {
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
      <RegisterLoginNavbar routeName={"login"} />
      <main className="flex min-h-screen flex-col items-center bg-[#F7F9FB]">
        <div className="mt-[118px]">
          <div className="p-4">
            <form action="">
              <p className="text-center text-[20px] font-bold">
                Login to your account
              </p>
              <div className="mt-4 flex flex-col">
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="email" className="font-medium">
                    Username or Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="h-[45px] w-[363px] rounded-md"
                  />
                </div>
                <div className="mt-[10px] flex flex-col gap-[10px]">
                  <label htmlFor="username" className="font-medium">
                    Password
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="h-[45px] w-[363px] rounded-md"
                  />
                </div>
              </div>
              <div className="mt-12 flex flex-col">
                <button className="w-[363px] cursor-pointer items-center justify-center gap-[20px] rounded-md border-2 border-solid border-[#00C649] bg-[#00C649] p-2 text-center text-white">
                  Continue
                </button>
                <p className="mt-[11px] text-[12px]">
                  By continuing, you agree to the
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
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
