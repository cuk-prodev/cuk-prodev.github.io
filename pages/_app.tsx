import type { AppProps } from "next/app";

// ⬇️ Import global CSS DI SINI
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import ToasterContext from "./api/contex/ToasetContex";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <ToasterContext />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </SessionProvider>
  );
}
