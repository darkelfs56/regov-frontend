import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HomeProfileNavbar from "~/components/HomeProfileNavbar";
import { CgProfile } from "react-icons/cg";
import { BsFacebook, BsGoogle } from "react-icons/bs";

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
      <main className="flex min-h-screen flex-col items-center bg-[#F7F9FB]">
        <div className="mt-[29px] flex gap-[78px]">
          <div className="w-[404px]">
            <div className="from flex flex-col items-center justify-center rounded-t-lg bg-gradient-to-b from-[#00C94A] to-[#008230] pt-4 pb-4">
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
          <div>Achievements and Membership</div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
