import {
  About,
  Contacts,
  Feature,
  Header,
  Hero,
  MainHeader,
  Statistic,
} from "../layout";

export default function Home() {
  return (
    <>
      <Header title="Home" description="This is the home page" />
      <div className="w-full min-h-screen bg-primary-100">
        <div className="w-full p-2 lg:px-8 lg:py-4 bg-white shadow-xl sticky top-0 z-50">
          <MainHeader />
        </div>
        <div className="w-full flex justify-center min-h-screen m-auto bg-hero-bg border-b-2">
          <Hero />
        </div>
        <div className="w-full bg-white flex justify-center lg:h-screen m-auto border-b-2">
          <About />
        </div>
        <div className="w-full bg-white flex justify-center lg:h-screen m-auto border-b-2">
          <Feature />
        </div>
        <div className="w-full bg-white flex justify-center lg:h-screen m-auto border-b-2">
          <Statistic />
        </div>
        <footer className="w-full bg-white flex justify-center m-auto">
          <Contacts />
        </footer>
      </div>
    </>
  );
}
