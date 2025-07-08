"use client";
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
      <title>CUK PRODEV - Jasa Website, Aplikasi, Sistem Digital</title>
      <meta name="google-site-verification" content="NCNiHtize2Ll5bxpGesyEebKLH5TgTaP-gE5IDGNL8M" />
      <meta name="google-site-verification" content="NCNiHtize2Ll5bxpGesyEebKLH5TgTaP-gE5IDGNL8M" />
      <meta name="description" content="CUK PRODEV menyediakan jasa pembuatan website, aplikasi Android, dan sistem digital seperti absensi, booking room, dan dashboard IoT." />
      <meta name="keywords" content="jasa pembuatan website, jasa pembuatan aplikasi Android, jasa website murah, freelancer IT, jasa pembuatan sistem absensi, jasa aplikasi IoT, web developer Jakarta, jasa React Native, developer GitHub Pages, jasa dashboard admin, jasa integrasi API, programmer freelance" />
      <meta name="author" content="CUK PRODEV" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
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
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
