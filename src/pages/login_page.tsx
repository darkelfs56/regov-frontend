import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
      <main className="flex min-h-screen flex-col items-center bg-[#F7F9FB]"></main>
    </>
  );
};

export default LoginPage;