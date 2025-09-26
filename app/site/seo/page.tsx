
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Faq from "../../../components/Faq";
import Pricing from "../../../components/Pricing";

const SeoGoogle = () => {
  return (
    <>
      <section className="py-12 bg-gray-50 dark:bg-dark-2">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Optimasi SEO – Sistem Informasi & Pembuatan Software
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Untuk meningkatkan visibilitas di Google, berikut adalah daftar
            <strong> universitas dengan jurusan Sistem Informasi & Teknik Informatika</strong> 
            serta layanan <strong>pembuatan software SEO</strong> yang bisa mendukung strategi digital.
          </p>

          {/* ✅ SEO Friendly, pakai details */}
          <details open>
            <summary className="cursor-pointer font-semibold text-blue-600 hover:underline">
              Lihat Daftar Universitas
            </summary>
            <div className="mt-4">
              <SistemInformasiInformatika />
            </div>
          </details>

          <details className="mt-6">
            <summary className="cursor-pointer font-semibold text-blue-600 hover:underline">
              Layanan Pembuatan Software SEO
            </summary>
            <div className="mt-4">
              <PembuatanSoftwareSEO />
            </div>
          </details>
        </div>
      </section>
    </>
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
