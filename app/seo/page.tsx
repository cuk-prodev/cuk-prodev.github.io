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
        <title>Cloud Computing, Big Data, Data Science, AI Development, Machine Learning, Deep Learning, 
            UI/UX Design, Frontend Development, Backend Development, Fullstack Development, E-Commerce App, 
            Enterprise Software, Startup IT, Mobile Game Development, Website Optimization, SEO Audit, Keyword Research, 
            Link Building, Content Marketing, Social Media SEO, On-Page SEO, Off-Page SEO, Technical SEO, 
            Local SEO, International SEO, Voice Search Optimization, SEO Analytics, Performance SEO, 
            Web Analytics, Google Ranking, SERP Optimization, Website Ranking, Organic Traffic, Paid Ads, 
            Google Ads, Facebook Ads, Instagram Marketing, TikTok Marketing, Digital Branding, Online Branding, 
            Marketing Strategy, Digital Transformation, IT Training, Coding Bootcamp, Software Engineer, 
            IT Career, University TI, University SI, Campus IT, Campus SI</title>
        <meta
          name="description"
          content="
            Cloud Computing, Big Data, Data Science, AI Development, Machine Learning, Deep Learning, 
            UI/UX Design, Frontend Development, Backend Development, Fullstack Development, E-Commerce App, 
            Enterprise Software, Startup IT, Mobile Game Development, Website Optimization, SEO Audit, Keyword Research, 
            Link Building, Content Marketing, Social Media SEO, On-Page SEO, Off-Page SEO, Technical SEO, 
            Local SEO, International SEO, Voice Search Optimization, SEO Analytics, Performance SEO, 
            Web Analytics, Google Ranking, SERP Optimization, Website Ranking, Organic Traffic, Paid Ads, 
            Google Ads, Facebook Ads, Instagram Marketing, TikTok Marketing, Digital Branding, Online Branding, 
            Marketing Strategy, Digital Transformation, IT Training, Coding Bootcamp, Software Engineer, 
            IT Career, University TI, University SI, Campus IT, Campus SI
          "
        />

        <meta 
          name="keywords"
          content="
            Cloud Computing, Big Data, Data Science, AI Development, Machine Learning, Deep Learning, 
            UI/UX Design, Frontend Development, Backend Development, Fullstack Development, E-Commerce App, 
            Enterprise Software, Startup IT, Mobile Game Development, Website Optimization, SEO Audit, Keyword Research, 
            Link Building, Content Marketing, Social Media SEO, On-Page SEO, Off-Page SEO, Technical SEO, 
            Local SEO, International SEO, Voice Search Optimization, SEO Analytics, Performance SEO, 
            Web Analytics, Google Ranking, SERP Optimization, Website Ranking, Organic Traffic, Paid Ads, 
            Google Ads, Facebook Ads, Instagram Marketing, TikTok Marketing, Digital Branding, Online Branding, 
            Marketing Strategy, Digital Transformation, IT Training, Coding Bootcamp, Software Engineer, 
            IT Career, University TI, University SI, Campus IT, Campus SI
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
