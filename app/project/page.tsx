
import Contact from "../../components-in/Contact";
import ScrollUp from "../../components-in/Common/ScrollUp";
import Head from "../head";
import Project from "@/components-in/Data/data/Project";

export default function HomePage() {
  return (
    <>
      <Head/>
     
      <main>
        <ScrollUp />
        <Project />
        <Contact />
      </main>
    </>
    
  );
}
