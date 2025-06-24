import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
// import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
// import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CUK [Create Until Kickass] Software Development",
  description: "🔴 CUK (Create Until Kickass) Solusi Digital untuk Bisnismu — Dari Ide Sampai Jadi Karya Kickass. CUK adalah tim developer berpengalaman di bidang Web, Mobile, dan Sistem Backend. Dengan lebih dari 10 tahun pengalaman, kami telah membangun berbagai solusi digital mulai dari sistem informasi, HRIS, POS, hingga platform marketplace dan media sosial. Cepat. Scalable. Kickass. Kami hadir untuk bantu mewujudkan ide dan kebutuhan bisnismu jadi aplikasi nyata yang tangguh, modern, dan siap bersaing.",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      {/* <CallToAction /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
