import Head from "next/head";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Home() {
  return (
    <>
    <Head>
      <title>Luke F. Manongsong | Portfolio</title>
      <meta name="description" content="Explore the portfolio of Luke F. Manongsong." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <NavBar />
      <main className="bg-white px-10 dark:bg-gray-950 pb-20" >
        <LandingPage />
        <Projects />
        <Experience />
      </main>
    </div>
  </>
  );
}
