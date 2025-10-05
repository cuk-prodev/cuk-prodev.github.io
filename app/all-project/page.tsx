
import Contact from "../../components-in/Contact";
import ScrollUp from "../../components-in/Common/ScrollUp";
import Head from "../head";
import Project from "@/components-in/Data/data/Project";
import Hero from "../ceo/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import ProductsPage from "@/components/Products";
// import Pricing from "@/components-in/Pricing";
import Pricing from "@/components/Pricing";
import AllProductPage from "@/components/AllProduct";

export default function HomePage() {
  return (
    <>
      <Head/>
     
      <main>
        {/* <Hero /> */}
        {/* <Features /> */}
        {/* <About /> */}
        <AllProductPage />
        {/* <Pricing /> */}
      </main>
    </>
    
  );
}
