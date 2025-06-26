// import Breadcrumb from "../../../components/Common/Breadcrumb";
// import NotFound from "../../../components/NotFound";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
// };

// const ErrorPage = () => {
//   return (
//     <>
//       <Breadcrumb pageName="404 Page" />

//       <NotFound />
//     </>
//   );
// };

// export default ErrorPage;

import Head from "next/head";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import NotFound from "../../../components/NotFound";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404 Page | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="Halaman tidak ditemukan - 404" />
      </Head>

      <Breadcrumb pageName="404 Page" />
      <NotFound />
    </>
  );
};

export default ErrorPage;
