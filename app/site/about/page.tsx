// import About from "../../../components/About";
// import Breadcrumb from "../../../components/Common/Breadcrumb";
// import Team from "../../../components/Team";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
//   description: "This is About page description",
// };

// const AboutPage = () => {
//   return (
//     <main>
//       <Breadcrumb pageName="About Us Page" />
//       <About />
//       <Team />
//     </main>
//   );
// };

// export default AboutPage;


import Head from "next/head";
import About from "../../../components/About";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Team from "../../../components/Team";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="This is About page description" />
      </Head>

      <main>
        <Breadcrumb pageName="About Us Page" />
        <About />
        <Team />
      </main>
    </>
  );
};

export default AboutPage;
