// import React from "react";
// import ForgotPassword from "../../../../components/Auth/ForgotPassword";
// import Breadcrumb from "../../../../components/Common/Breadcrumb";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Forgot Password | Play SaaS Starter Kit and Boilerplate for Next.js",
// };

// const ForgotPasswordPage = () => {
//   return (
//     <>
//       <Breadcrumb pageName="Forget Password" />
//       <ForgotPassword />
//     </>
//   );
// };

// export default ForgotPasswordPage;

import Head from "next/head";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import ForgotPassword from "@/components/Auth/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Forgot Password | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="Deskripsi halaman forgot password" />
      </Head>
      <Breadcrumb pageName="Forgot Password" />
      <ForgotPassword />
    </>
  );
}
