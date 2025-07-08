import Hero from "../../components-in/Hero";
import Features from "../../components-in/Features";
import About from "../../components-in/About";
import Contact from "../../components-in/Contact";
import ScrollUp from "../../components-in/Common/ScrollUp";
import Head from "../head";

export default function HomePage() {
  return (
    <>
      <Head/>
     
      <main>
        <ScrollUp />
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
    </>
    
  );
}
