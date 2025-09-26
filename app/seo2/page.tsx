"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // App Router
import SeoGoogle from "../site/seo/page";

export default function SeoPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // redirect ke home
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Universitas Indonesia, Universitas Negeri, Universitas Swasta, Sistem Informasi, Teknik Informatika, 
            Jurusan TI, Jurusan SI, Program Studi Informatika, Software SEO, Layanan SEO, SEO Tools, 
            Digital Marketing, Strategi Digital, Pemasaran Digital, Web Development, Mobile App Development, 
            Aplikasi Web, Aplikasi Mobile, SEO Friendly, Optimasi SEO, SEO Profesional, IT Consultant, 
            Konsultan IT, Pengembangan Software, Pembuatan Website, Pembuatan Aplikasi, SEO Universitas, 
            Kampus TI, Kampus SI, Informatika Indonesia, Teknik Informatika Indonesia, SEO Tips, SEO Guide, 
            Optimasi Website, Digital Strategy, Marketing Online, Search Engine Optimization, SEO Teknik, 
            SEO Tools Indonesia, Software Development, Software Custom, Pengembangan Aplikasi, Kampus Negeri Indonesia, 
            Kampus Swasta Indonesia, Universitas di Jakarta, Universitas di Jawa Barat, Universitas di Jawa Tengah, 
            Universitas di Jawa Timur, Universitas di Yogyakarta, Universitas di Sumatera, Universitas di Sulawesi, 
            SEO Website, SEO Content, SEO Marketing, SEO Services, SEO Solutions, SEO Indonesia, Digital Campaign</title>
        <meta
          name="description"
          content="
            Universitas Indonesia, Universitas Negeri, Universitas Swasta, Sistem Informasi, Teknik Informatika, 
            Jurusan TI, Jurusan SI, Program Studi Informatika, Software SEO, Layanan SEO, SEO Tools, 
            Digital Marketing, Strategi Digital, Pemasaran Digital, Web Development, Mobile App Development, 
            Aplikasi Web, Aplikasi Mobile, SEO Friendly, Optimasi SEO, SEO Profesional, IT Consultant, 
            Konsultan IT, Pengembangan Software, Pembuatan Website, Pembuatan Aplikasi, SEO Universitas, 
            Kampus TI, Kampus SI, Informatika Indonesia, Teknik Informatika Indonesia, SEO Tips, SEO Guide, 
            Optimasi Website, Digital Strategy, Marketing Online, Search Engine Optimization, SEO Teknik, 
            SEO Tools Indonesia, Software Development, Software Custom, Pengembangan Aplikasi, Kampus Negeri Indonesia, 
            Kampus Swasta Indonesia, Universitas di Jakarta, Universitas di Jawa Barat, Universitas di Jawa Tengah, 
            Universitas di Jawa Timur, Universitas di Yogyakarta, Universitas di Sumatera, Universitas di Sulawesi, 
            SEO Website, SEO Content, SEO Marketing, SEO Services, SEO Solutions, SEO Indonesia, Digital Campaign
          "
        />

        <meta 
          name="keywords"
          content="
            Universitas Indonesia, Universitas Negeri, Universitas Swasta, Sistem Informasi, Teknik Informatika, 
            Jurusan TI, Jurusan SI, Program Studi Informatika, Software SEO, Layanan SEO, SEO Tools, 
            Digital Marketing, Strategi Digital, Pemasaran Digital, Web Development, Mobile App Development, 
            Aplikasi Web, Aplikasi Mobile, SEO Friendly, Optimasi SEO, SEO Profesional, IT Consultant, 
            Konsultan IT, Pengembangan Software, Pembuatan Website, Pembuatan Aplikasi, SEO Universitas, 
            Kampus TI, Kampus SI, Informatika Indonesia, Teknik Informatika Indonesia, SEO Tips, SEO Guide, 
            Optimasi Website, Digital Strategy, Marketing Online, Search Engine Optimization, SEO Teknik, 
            SEO Tools Indonesia, Software Development, Software Custom, Pengembangan Aplikasi, Kampus Negeri Indonesia, 
            Kampus Swasta Indonesia, Universitas di Jakarta, Universitas di Jawa Barat, Universitas di Jawa Tengah, 
            Universitas di Jawa Timur, Universitas di Yogyakarta, Universitas di Sumatera, Universitas di Sulawesi, 
            SEO Website, SEO Content, SEO Marketing, SEO Services, SEO Solutions, SEO Indonesia, Digital Campaign
          "
        />

      </Head>


      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
            zIndex: 9999, // pastikan paling atas
          }}
        >
          <div style={{
            width: "50px",
            height: "50px",
            border: "5px solid #ccc",
            borderTop: "5px solid #0070f3",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }} />
          <style>
            {`@keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }`}
          </style>
        </div>

      )}
      <SeoGoogle />
    </>
  );
}
