import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import PreLoader from "../components/Common/PreLoader";

export default function MyApp({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <SessionProvider>
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <ToasterContext />
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      )}
    </>
  );
}
