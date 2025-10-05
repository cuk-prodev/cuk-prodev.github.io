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
  { 
    id: 1, 
    image: "/images/AI-Dashboard-Analyst.png", 
    title: "AI Analyst Dashboard", 
    desc: "AI-powered insights & business dashboard with prediction analytics.", 
    category: "app" 
  },
  { id: 2, image: "/images/monitoring-bisnis.png", title: "Business Monitoring Dashboard", desc: "Executive dashboard for finance, operations, server & project status.", category: "dashboard" },
  { id: 3, image: "/images/hris-dashboard.png", title: "HRIS Dashboard", desc: "Comprehensive HR dashboard.", category: "dashboard" },
  { id: 4, image: "/images/hris-laporan.png", title: "HRIS Report", desc: "Performance evaluation and reports.", category: "dashboard" },
  { id: 5, image: "/images/hris-penilaian.png", title: "HRIS Evaluation", desc: "Employee evaluation form & results.", category: "dashboard" },
  { id: 6, image: "/images/aplication-visitor.png", title: "Visitor App — Check-in", desc: "Visitor registration with QR check-in and log history.", category: "app" },
  { id: 7, image: "/images/jasa-kirim.png", title: "Tracking Delivery App", desc: "Track shipments with detailed timeline and realtime map.", category: "app" },
  { id: 8, image: "/images/g-ride.png", title: "G-Ride", desc: "Reliable transportation app.", category: "app" },
  { id: 9, image: "/images/pinjaman-bank-transaksi.png", title: "Bank Loan Transaction Dashboard", desc: "Monitor balance, installments, and loan transaction history.", category: "app" },
  { id: 10, image: "/images/pinjaman-bank.png", title: "Bank Loan Application", desc: "Apply for loans online with flexible limits and tenors.", category: "app" },
  { id: 11, image: "/images/tour.png", title: "Travel APP", desc: "Choose destination easily.", category: "app" },
  { id: 12, image: "/images/sanjaya.png", title: "Booking System", desc: "Real estate website.", category: "company" },
  { id: 13, image: "/images/barugasikola.png", title: "E-Learning & Medsos Barugasikola", desc: "Online learning & medsos platform.", category: "other" },
  { id: 14, image: "/images/kingfruit.png", title: "King of The King Marketplace", desc: "Premium durian website.", category: "other" },
  { id: 15, image: "/images/server-monitoring.png", title: "Server Monitoring", desc: "Realtime server monitoring.", category: "app" },
  { id: 16, image: "/images/grup-rumah-makan-monitoring.png", title: "Restaurant Group Monitoring", desc: "Outlet monitoring.", category: "app" },
  { id: 17, image: "/images/grup-toko-monitoring.png", title: "Retail Store Monitoring", desc: "Monitoring system.", category: "app" },
  { id: 18, image: "/images/medsos.png", title: "Social Media App", desc: "A modern social platform.", category: "app" },
  { id: 19, image: "/images/access-room-meeting.png", title: "Meeting Room Access", desc: "Room booking and QR-based access control.", category: "app" },
  { id: 20, image: "/images/monitoring-hikvision-access.png", title: "Hikvision Door Monitoring", desc: "Realtime door access monitoring with logs and snapshots.", category: "app" },
  { id: 21, image: "/images/kasir.png", title: "POS System", desc: "A powerful cashier system.", category: "app" },
  { id: 22, image: "/images/parkir.png", title: "Smart Parking", desc: "Complete smart parking.", category: "app" },
  { id: 23, image: "/images/market.png", title: "Marketplace App", desc: "An elegant marketplace.", category: "app" },
  { 
    id: 25, 
    image: "/images/AI-Dashboard-Analyst.png", 
    title: "AI Analyst Dashboard", 
    desc: "AI-powered insights & business dashboard with prediction analytics.", 
    category: "dashboard" 
  },
  { id: 26, image: "/images/finance-monitoring.png", title: "Finance & Accounting Dashboard", desc: "Monitor revenue, profit, cashflow & budget performance.", category: "dashboard" },
  { id: 27, image: "/images/sustainability-dashboard.png", title: "Sustainability Dashboard", desc: "Monitor environmental, social & governance metrics for green compliance.", category: "dashboard" },
  { id: 28, image: "/images/sales-monitoring.png", title: "Sales & Marketing Dashboard", desc: "Monitor sales pipeline, targets, leads & campaign performance.", category: "dashboard" },
  { id: 29, image: "/images/hris.png", title: "HRIS Login", desc: "Secure HRIS login system.", category: "dashboard" },
  { id: 30, image: "/images/damia.png", title: "Attendance Report HRIS", desc: "Manage employee attendance.", category: "dashboard" },
  { id: 31, image: "/images/hris_dashboard.png", title: "HRIS Dashboard", desc: "Comprehensive HR dashboard.", category: "dashboard" },
];

const categories = [
  { key: "app", label: "App" },
  { key: "dashboard", label: "Dashboard" },
  { key: "company", label: "Company Profile" },
  { key: "other", label: "Other" },
] as const;

// batas item per kategori
const ITEMS_LIMIT_PER_CATEGORY = 666;

const AllProductPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

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

  return (
    <section className="pb-24 pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-extrabold mb-14 text-gray-900 dark:text-white tracking-wide">
          ✨ All Products by CUK PRODEV ✨
        </h2>

        {/* === List semua kategori seperti hasil Google === */}
        {categories.map((cat) => {
          const filtered = products.filter((p) => p.category === cat.key).slice(0, ITEMS_LIMIT_PER_CATEGORY);
          if (filtered.length === 0) return null;

          return (
            <div key={cat.key} className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
                {cat.label}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map((p) => (
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
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* === Modal Preview === */}
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

export default AllProductPage;
