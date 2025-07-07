

import Head from "next/head";
import Breadcrumb from "../components/Common/Breadcrumb";
import NotFound from "../components/NotFound";
import { Metadata } from "next";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404 Page | Play SaaS Starter Kit and Boilerplate for Next.js</title>
        <meta name="description" content="Halaman tidak ditemukan - 404" />
        {/* <meta name="description" content="CUK PRODEV menyediakan jasa pembuatan website, aplikasi Android, dan sistem digital seperti absensi, booking room, dan dashboard IoT." /> */}
        <meta name="keywords" content="jasa pembuatan website, jasa pembuatan aplikasi Android, jasa website murah, freelancer IT, jasa pembuatan sistem absensi, jasa aplikasi IoT, web developer Jakarta, jasa React Native, developer GitHub Pages, jasa dashboard admin, jasa integrasi API, programmer freelance" />
        <meta name="author" content="CUK PRODEV" />
      </Head>

      <Breadcrumb pageName="404 Page" />
      <NotFound />
    </>
  );
};

export default ErrorPage;
