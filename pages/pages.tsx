import Head from "next/head";
import About from "../components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
// import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact";
// import Faq from "@/components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";
// import { getAllPosts } from "../utils/markdown";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Head>
        <title>CUK [Create Until Kickass] Software Development</title>
        <meta
          name="description"
          content="🔴 CUK (Create Until Kickass) Solusi Digital untuk Bisnismu — Dari Ide Sampai Jadi Karya Kickass. CUK adalah tim developer berpengalaman di bidang Web, Mobile, dan Sistem Backend. Dengan lebih dari 10 tahun pengalaman, kami telah membangun berbagai solusi digital mulai dari sistem informasi, HRIS, POS, hingga platform marketplace dan media sosial. Cepat. Scalable. Kickass. Kami hadir untuk bantu mewujudkan ide dan kebutuhan bisnismu jadi aplikasi nyata yang tangguh, modern, dan siap bersaing."
        />
      </Head>

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
