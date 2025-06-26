// import Breadcrumb from "../../../components/Common/Breadcrumb";
// import Faq from "../../../components/Faq";
// import Pricing from "../../../components/Pricing";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   description: "This is pricing page description",
// };

// const PricingPage = () => {
//   return (
//     <>
//       <Breadcrumb pageName="Pricing Page" />
//       <Pricing />
//       <Faq />
//     </>
//   );
// };

// export default PricingPage;

import Head from "next/head";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Faq from "../../../components/Faq";
import Pricing from "../../../components/Pricing";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="This is pricing page description" />
      </Head>

      <Breadcrumb pageName="Pricing Page" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
