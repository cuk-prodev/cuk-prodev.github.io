// import Signin from "../../../../components/Auth/SignIn";
// import Breadcrumb from "../../../../components/Common/Breadcrumb";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
// };

// const SigninPage = () => {
//   return (
//     <>
//       <Breadcrumb pageName="Sign In Page" />

//       <Signin />
//     </>
//   );
// };

// export default SigninPage;

import Head from "next/head";
import Signin from "../../../../components/Auth/SignIn";
import Breadcrumb from "../../../../components/Common/Breadcrumb";

const SigninPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="Halaman login untuk pengguna yang sudah terdaftar." />
      </Head>

      <Breadcrumb pageName="Sign In Page" />
      <Signin />
    </>
  );
};

export default SigninPage;
