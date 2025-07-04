// import SignUp from "../../../../components/Auth/SignUp";
// import Breadcrumb from "../../../../components/Common/Breadcrumb";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js",
// };

// const SignupPage = () => {
//   return (
//     <>
//       <Breadcrumb pageName="Sign Up Page" />

//       <SignUp />
//     </>
//   );
// };

// export default SignupPage;

import Head from "next/head";
import SignUp from "../../../../components/Auth/SignUp";
import Breadcrumb from "../../../../components/Common/Breadcrumb";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="Halaman registrasi untuk pengguna baru." />
      </Head>

      <Breadcrumb pageName="Sign Up Page" />
      <SignUp />
    </>
  );
};

export default SignupPage;
