import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HomeProfileNavbar from "~/components/HomeProfileNavbar";
import { CgProfile } from "react-icons/cg";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";

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
      <HomeProfileNavbar routeName={"profile"} />
      <main className="flex min-h-screen flex-col bg-[#F7F9FB]">
        <div className="mt-[29px] flex">
          <div className="mr-[78px] ml-[56px] w-[404px]">
            <div className="flex flex-col items-center justify-center rounded-t-lg bg-gradient-to-b from-[#00C94A] to-[#008230] pt-4 pb-4">
              <CgProfile size={140} color={"white"} />
              <p className="mt-[18px] text-center text-white">
                Muhammad Akmal bin Anuar
              </p>
            </div>
            <div className="flex flex-col gap-[28px] rounded-b-lg border-2 border-solid border-[#D9D9D9] p-4 pt-[44px]">
              <div>
                <h2 className="underline">Email</h2>
                <p>m.akmalanuar56@gmail.com</p>
              </div>
              <div>
                <h2 className="underline">Phone number</h2>
                <p>+60192694282</p>
              </div>
              <div>
                <h2 className="underline">Date of birth</h2>
                <p>22 March 2000</p>
              </div>
              <div>
                <h2 className="">Linked accounts</h2>
                <div className="mt-[11px] flex gap-4">
                  <BsGoogle size={28} />
                  <BsFacebook size={28} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="mb-6">
              <h2 className="text-[20px]">Achievements</h2>
              <div className="mt-6 flex gap-16">
                <div className="text-center">
                  <BiCircle size={147} />
                  <p>First spender!</p>
                </div>
                <div className="text-center">
                  <BiCircle size={147} />
                  <p>Star giver</p>
                </div>
                <div className="text-center">
                  <BiCircle size={147} />
                  <p>Shopping spree</p>
                </div>
                <div className="text-center">
                  <BiCircle size={147} />
                  <p>So Lucky!</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-6">
              <h2 className="text-[20px]">Membership</h2>
              <div className="flex flex-col items-center">
                <p className="text-[18px]">Member</p>
                <div className="min-h-[10px] min-w-[100%] border-2 border-solid border-[#D9D9D9]"></div>
              </div>
              <div className="mt-4 text-[16px]">
                <p>Get 200 more points by June 2023 to unlock Silver</p>
                <Link href={""} className="text-[#3E51FA]">
                  View Tier Benefits
                </Link>
              </div>
              <div className="mt-4 text-[16px]">
                <p>
                  You have{" "}
                  <span className="text-[#00C649]">0 Rewards Points</span>
                </p>
                <p>
                  <span className="text-[#FF3030]">0 points</span> will expire
                  on Dec 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
