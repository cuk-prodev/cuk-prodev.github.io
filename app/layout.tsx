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

import { blockInspect } from "./types/blockInspect";
import Swal from "sweetalert2";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { setupAxios } from "./types/setupAxios";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [loading, setLoading] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);

  // ✅ fungsi deteksi Safari iOS
  const isIOSSafari = () => {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    return isIOS && isSafari;
  };

  useEffect(() => {
    // ✅ handle loading
    const timer = setTimeout(() => setLoading(false), 1000);

    // ✅ setup axios & chart
    setupAxios(axios);
    Chart.register(...registerables);

    // ✅ block inspect (kecuali Safari iOS)
    if (!isIOSSafari()) {
      try {
        const inspector = blockInspect({
          disableContextMenu: true,
          disableDevToolsShortcut: true,
          disableSelection: true,
          disableCopy: true,
          disableCut: true,
          disablePaste: true,
          allowedKeys: ["Ctrl+R", "Meta+R", "F5"],
          onInspectAttempt: () => {
            Swal.fire("⚠️ Warning", "Inspect attempt blocked!", "warning");
          },
          redirectOnInspect: "back",
        });

        if (inspector?.isDevToolsOpen?.()) {
          Swal.fire("❌ Illegal Action", "DevTools terdeteksi!", "error").then(() => {
            window.open("", "_self")?.close();
            window.location.href = "about:blank";
          });
        }
      } catch (e) {
        console.error("Inspector check failed:", e);
      }
    }

    // ✅ cleanup timer
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);

  //   // setup axios & chart
  //   setupAxios(axios);
  //   Chart.register(...registerables);

  //   // aktifkan blokir inspect
  //   const inspector = blockInspect({
  //     disableContextMenu: true,
  //     disableDevToolsShortcut: true,
  //     disableSelection: true,
  //     disableCopy: true,
  //     disableCut: true,
  //     disablePaste: true,
  //     allowedKeys: ["Ctrl+R", "Meta+R", "F5"],
  //     onInspectAttempt: () => {
  //       Swal.fire("⚠️ Warning", "Inspect attempt blocked!", "warning");
  //     },
  //     redirectOnInspect: "back",
  //   });

  //   try {
  //     if (inspector?.isDevToolsOpen?.()) {
  //       Swal.fire("❌ Illegal Action", "DevTools terdeteksi!", "error").then(() => {
  //         window.open("", "_self")?.close(); 
  //         window.location.href = "about:blank"; 
  //       });
  //     }
  //   } catch (e) {
  //     console.error("Inspector check failed:", e);
  //   }
  // }, []);

  
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <title>CUK PRODEV - Jasa Website, Aplikasi, Sistem Digital</title>
      <meta
        name="description"
        content="CUK PRODEV menyediakan jasa pembuatan website, aplikasi Android, dan sistem digital seperti absensi, booking room, dan dashboard IoT."
      />
      <meta name="author" content="CUK PRODEV" />
      <head />

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
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
