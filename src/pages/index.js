import Head from "next/head";
import Image from "next/image";
import { About, Header, Hero, MainHeader } from "../layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header title="Home" description="This is the home page" />
      <div className="w-full min-h-screen bg-primary-100">
        <MainHeader />
        <div className="w-full flex justify-center h-80 m-auto bg-hero-bg">
          <Hero />
        </div>
        <div className="w-full bg-white flex justify-center h-80 m-auto px-36 border-b-slate-900">
          <About />
        </div>
      </div>
    </>
  );
}
