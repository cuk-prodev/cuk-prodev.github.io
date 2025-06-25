// import Breadcrumb from "../../../components/Common/Breadcrumb";
// import Contact from "../../../components/Contact";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
//   description: "This is contact page description",
// };

// const ContactPage = () => {
//   return (
//     <>
//       <Breadcrumb pageName="Contact Page" />

//       <Contact />
//     </>
//   );
// };

// export default ContactPage;

import Head from "next/head";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Contact from "../../../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="This is contact page description" />
      </Head>

      <Breadcrumb pageName="Contact Page" />
      <Contact />
    </>
  );
};

export default ContactPage;
