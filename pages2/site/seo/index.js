import React from "react";
import Image from "next/image";
import Link from "next/link";

const SeoGoogle = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
      <div className="container mx-auto text-center">
        {/* SEO components */}
        <SistemInformasiInformatika />
        <PembuatanSoftwareSEO />

        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="relative aspect-[129/138] w-[250px] sm:w-[300px] lg:w-[357px]">
            <Image
              src="/images/404.svg"
              alt="404"
              fill
              className="dark:hidden"
            />
            <Image
              src="/images/404-dark.svg"
              alt="404"
              fill
              className="hidden dark:block"
            />
          </div>

          {/* Text */}
          <h1 className="mt-8 text-4xl font-bold text-dark dark:text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="mt-4 text-lg text-dark-6 dark:text-dark-4">
            Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
          </p>

          {/* Back button */}
          <div className="mt-8">
            <Link
              href="/"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



const SistemInformasiInformatika = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-2">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Universitas dengan Jurusan Sistem Informasi & Teknik Informatika di Indonesia
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Berikut adalah daftar <strong>universitas di Indonesia</strong> yang memiliki 
          program studi <strong>Sistem Informasi</strong> dan <strong>Teknik Informatika</strong>.
          Data ini mencakup kampus negeri maupun swasta di berbagai provinsi.
        </p>

        <details>
          <summary className="cursor-pointer font-semibold text-blue-600 hover:underline">
            Lihat Semua Universitas
          </summary>
          <div className="mt-4 space-y-6">
            
            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Jakarta
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Universitas Budi Luhur — Sistem Informasi & Teknik Informatika</li>
                <li>Universitas Gunadarma — Sistem Informasi & Informatika</li>
                <li>Universitas Mercu Buana — Sistem Informasi</li>
                <li>Universitas Esa Unggul — Sistem Informasi</li>
                <li>Universitas Kristen Krida Wacana — Sistem Informasi</li>
                <li>Universitas Katolik Indonesia Atma Jaya — Sistem Informasi</li>
                <li>Universitas Bina Nusantara (BINUS) – Sistem Informasi</li>
                <li>Universitas Esa Unggul – Sistem Informasi</li>
                <li>Universitas Mercu Buana – Sistem Informasi</li>
                <li>Universitas Tarumanagara – Sistem Informasi</li>
                <li>Universitas Trisakti – Sistem Informasi</li>
                <li>Universitas Katolik Indonesia Atma Jaya Jakarta – Sistem Informasi</li>

              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Jawa Barat
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Institut Teknologi Bandung (ITB) — Teknik Informatika</li>
                <li>Universitas Komputer Indonesia (UNIKOM) — SI & TI</li>
                <li>Universitas Telkom (Tel-U) — Sistem Informasi & Informatika</li>
                <li>Universitas Kristen Maranatha — Sistem Informasi</li>
                <li>Universitas Advent Indonesia — SI & TI</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Jawa Tengah
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Universitas Diponegoro (UNDIP) — Sistem Informasi</li>
                <li>Universitas Dian Nuswantoro (UDINUS) — Sistem Informasi & Informatika</li>
                <li>Universitas Kristen Satya Wacana (UKSW) — Informatika</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Jawa Timur
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Institut Teknologi Sepuluh Nopember (ITS) — Sistem Informasi & Informatika</li>
                <li>Universitas Brawijaya (UB) — Sistem Informasi</li>
                <li>Universitas Negeri Surabaya (UNESA) — Teknik Informatika</li>
                <li>Universitas Kristen Petra — Sistem Informasi</li>
                <li>Universitas Surabaya (UBAYA) — Sistem Informasi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Yogyakarta
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Universitas Gadjah Mada (UGM) — Teknik Informatika</li>
                <li>Universitas Atma Jaya Yogyakarta — Sistem Informasi</li>
                <li>Universitas Negeri Yogyakarta (UNY) — Informatika</li>
                <li>Universitas Islam Indonesia (UII) — Informatika</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Sumatera
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Universitas Sumatera Utara (USU) — Sistem Informasi & Informatika</li>
                <li>Universitas Andalas (UNAND) — Informatika</li>
                <li>Universitas Negeri Padang (UNP) — Sistem Informasi</li>
                <li>Universitas Teknokrat Indonesia (Bandar Lampung) — Sistem Informasi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Sulawesi
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Universitas Hasanuddin (UNHAS) — Informatika</li>
                <li>Universitas Negeri Makassar (UNM) — Teknik Informatika</li>
              </ul>
            </div>

          </div>
        </details>
      </div>
    </section>
  );
};


const PembuatanSoftwareSEO = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-2">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Jasa & Pembuatan Software yang Banyak Dicari di Google
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Berikut adalah daftar <strong>kata kunci populer</strong> yang sering digunakan 
          orang di Google ketika mencari <strong>jasa pembuatan software</strong>, aplikasi, 
          maupun sistem informasi. Daftar ini bisa membantu meningkatkan visibilitas SEO.
        </p>

        <details>
          <summary className="cursor-pointer font-semibold text-blue-600 hover:underline">
            Lihat Semua Kata Kunci
          </summary>
          <div className="mt-4 space-y-6">

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Pencarian Umum
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>jasa pembuatan software</li>
                <li>software house terbaik</li>
                <li>software development company</li>
                <li>custom software development</li>
                <li>software developer freelance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Aplikasi Mobile
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>jasa bikin aplikasi android</li>
                <li>jasa bikin aplikasi ios</li>
                <li>jasa pembuatan aplikasi mobile</li>
                <li>aplikasi startup custom</li>
                <li>harga bikin aplikasi android</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Aplikasi Web & Bisnis
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>jasa pembuatan aplikasi website</li>
                <li>jasa pembuatan aplikasi ERP</li>
                <li>jasa pembuatan aplikasi keuangan</li>
                <li>jasa pembuatan aplikasi toko online</li>
                <li>pembuatan sistem informasi perusahaan</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Lokasi Populer
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>software developer Jakarta</li>
                <li>jasa pembuatan software Bandung</li>
                <li>jasa bikin aplikasi Surabaya</li>
                <li>software house Yogyakarta</li>
                <li>jasa pembuatan aplikasi Bali</li>
              </ul>
            </div>

          </div>
        </details>
      </div>
    </section>
  );
};


export default SeoGoogle;
