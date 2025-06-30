"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "../components/Common/PreLoader";
import Head from "./head";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <title>CUK [Create Until Kickass] Software Development</title>
      <meta
        name="description"
        content="🔴 CUK (Create Until Kickass) Solusi Digital untuk Bisnismu — Dari Ide Sampai Jadi Karya Kickass. CUK adalah tim developer berpengalaman di bidang Web, Mobile, dan Sistem Backend. Dengan lebih dari 10 tahun pengalaman, kami telah membangun berbagai solusi digital mulai dari sistem informasi, HRIS, POS, hingga platform marketplace dan media sosial. Cepat. Scalable. Kickass. Kami hadir untuk bantu mewujudkan ide dan kebutuhan bisnismu jadi aplikasi nyata yang tangguh, modern, dan siap bersaing."
      />
      <head />

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <ToasterContext />


            <main>
              <ScrollUp />
              <Hero />
              <Features />
              <About />
              <Contact />
            </main>
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
