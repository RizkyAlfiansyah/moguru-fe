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
        <MainHeader />
        <div className="w-full flex justify-center h-80 m-auto bg-hero-bg">
          <Hero />
        </div>
        <div className="w-full bg-white flex justify-center h-screen m-auto px-14">
          <About />
        </div>
        <div className="w-full bg-white flex justify-center h-screen m-auto px-14">
          <Feature />
        </div>
        <div className="w-full bg-white flex justify-center h-screen m-auto px-14">
          <Statistic />
        </div>
        <footer className="w-full bg-white flex justify-center m-auto px-14">
          <Contacts />
        </footer>
      </div>
    </>
  );
}
