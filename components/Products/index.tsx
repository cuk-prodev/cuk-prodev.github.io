"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  image: string;
  title: string;
  desc: string;
  category: "dashboard" | "company" | "app" | "other";
};

const products: Product[] = [
  // ==== contoh kategori ====
  { id: 1, image: "/images/medsos.png", title: "Social Media App", desc: "A modern social platform.", category: "app" },
  { id: 2, image: "/images/market.png", title: "Marketplace App", desc: "An elegant marketplace.", category: "app" },
  { id: 3, image: "/images/kasir.png", title: "POS System", desc: "A powerful cashier system.", category: "app" },
  { id: 4, image: "/images/g-ride.png", title: "G-Ride", desc: "Reliable transportation app.", category: "app" },
  { id: 5, image: "/images/parkir.png", title: "Smart Parking", desc: "Complete smart parking.", category: "app" },
  { id: 6, image: "/images/tour.png", title: "Travel APP", desc: "Choose destination easily.", category: "app" },
  { id: 7, image: "/images/sanjaya.png", title: "Booking System", desc: "Real estate website.", category: "company" },
  { id: 8, image: "/images/hris_dashboard.png", title: "HRIS Dashboard", desc: "Comprehensive HR dashboard.", category: "dashboard" },
  { id: 9, image: "/images/damia.png", title: "Attendance Report HRIS", desc: "Manage employee attendance.", category: "dashboard" },
  { id: 10, image: "/images/hris.png", title: "HRIS Login", desc: "Secure HRIS login system.", category: "dashboard" },
  { id: 11, image: "/images/barugasikola.png", title: "E-Learning & Medsos Barugasikola", desc: "Online learning & medsos platform.", category: "other" },
  { id: 12, image: "/images/kingfruit.png", title: "King of The King Marketplace", desc: "Premium durian website.", category: "company" },
  { id: 13, image: "/images/server-monitoring.png", title: "Server Monitoring", desc: "Realtime server monitoring.", category: "app" },
  { id: 14, image: "/images/grup-rumah-makan-monitoring.png", title: "Restaurant Group Monitoring", desc: "Outlet monitoring.", category: "app" },
  { id: 15, image: "/images/grup-toko-monitoring.png", title: "Retail Store Monitoring", desc: "Monitoring system.", category: "app" },
  { id: 16, image: "/images/aplication-visitor.png", title: "Visitor App — Check-in", desc: "Visitor registration with QR check-in and log history.", category: "app" },
  { id: 17, image: "/images/access-room-meeting.png", title: "Meeting Room Access", desc: "Room booking and QR-based access control.", category: "app" },
  { id: 18, image: "/images/monitoring-hikvision-access.png", title: "Hikvision Door Monitoring", desc: "Realtime door access monitoring with logs and snapshots.", category: "app" },
];

const categories = [
  { key: "app", label: "App" },
  { key: "dashboard", label: "Dashboard" },
  { key: "company", label: "Company Profile" },
  { key: "other", label: "Other" },
] as const;

const ITEMS_PER_PAGE = 6;

const ProductsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // tab dan pagination
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]["key"]>("dashboard");
  const [pageByCat, setPageByCat] = useState<Record<string, number>>({});

  useEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);
    if (document.readyState === "complete") setIsPageLoaded(true);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleNextModal = () =>
    selectedIndex !== null &&
    setSelectedIndex((selectedIndex + 1) % products.length);
  const handlePrevModal = () =>
    selectedIndex !== null &&
    setSelectedIndex((selectedIndex - 1 + products.length) % products.length);

  // filter & pagination
  const filtered = products.filter((p) => p.category === activeCategory);
  const currentPage = pageByCat[activeCategory] || 1;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const setPage = (cat: string, page: number) =>
    setPageByCat((prev) => ({ ...prev, [cat]: page }));

  return (
    <section className="pb-16 pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-900 dark:text-white tracking-wide">
          ✨ Featured Products by CUK PRODEV ✨
        </h2>

        {/* === Menu Tabs === */}
        <div className="flex justify-center mb-8 flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => {
                setActiveCategory(c.key);
                setPage(c.key, 1);
              }}
              className={`px-4 py-2 rounded-full border font-medium transition
               ${
                 activeCategory === c.key
                   ? "bg-blue-600 text-white border-blue-600"
                   : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
               }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* === Product Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginated.map((p, index) => (
            <div
              key={p.id}
              className="relative bg-white/80 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedIndex(products.indexOf(p))}
            >
              {isPageLoaded ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-60 object-contain"
                />
              ) : (
                <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === Pagination Control === */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-3" style={{marginTop:'100px'}}>
            <button
              onClick={() => setPage(activeCategory, Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-2 text-gray-700 dark:text-gray-200" style={{marginTop:'5px', fontWeight:'bold'}}>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() =>
                setPage(activeCategory, Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* === Modal === */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-400"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={36} />
          </button>
          <button
            className="absolute left-6 text-white hover:text-gray-400"
            onClick={handlePrevModal}
          >
            <ChevronLeft size={48} />
          </button>
          <img
            src={products[selectedIndex].image}
            alt={products[selectedIndex].title}
            className="max-h-[85%] max-w-[85%] rounded-2xl shadow-2xl border-4 border-white/30"
          />
          <button
            className="absolute right-6 text-white hover:text-gray-400"
            onClick={handleNextModal}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
