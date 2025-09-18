import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import ScrollUp from "../components/Common/ScrollUp";
import Head from "./head";
import ProductsPage from "@/components/Products";

export default function HomePage() {
  return (
    <>
      <Head/>
     
      <main>
        <ScrollUp />
        <Hero />
        <Features />
        <About />
        <ProductsPage />
        <Contact />
      </main>
    </>
    
  );
}
