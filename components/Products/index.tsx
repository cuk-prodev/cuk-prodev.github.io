"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, image: "/images/medsos.png", title: "Social Media App", desc: "A modern social platform for digital interaction." },
  { id: 2, image: "/images/market.png", title: "Marketplace App", desc: "An elegant marketplace application with sleek UI." },
  { id: 3, image: "/images/kasir.png", title: "POS System", desc: "A powerful cashier system for your business." },
  { id: 4, image: "/images/g-ride.png", title: "G-Ride", desc: "An efficient and reliable transportation app." },
  { id: 5, image: "/images/parkir.png", title: "Smart Parking", desc: "A complete smart parking solution for enterprises." },
  { id: 6, image: "/images/tour.png", title: "Travel APP", desc: "Choose your destination easily for intercity trips, instant voice translation for different languages." },
  { id: 7, image: "/images/sanjaya.png", title: "Booking System", desc: "Real estate website showcasing properties, clients, and successful projects." },
  { id: 8, image: "/images/hris_dashboard.png", title: "HRIS Dashboard", desc: "Comprehensive HR dashboard to manage employee data, payroll, and attendance." },
  { id: 9, image: "/images/damia.png", title: "Attendance Report HRIS", desc: "A modern system for managing and tracking employee attendance." },
  { id: 10, image: "/images/hris.png", title: "HRIS Login", desc: "Secure HRIS login system for employees and administrators." },
  { id: 11, image: "/images/barugasikola.png", title: "E-Learning Baruga", desc: "An online learning platform for teachers and students, supported by Balai Pustaka." },
  { id: 12, image: "/images/kingfruit.png", title: "King of The King Marketplace", desc: "Premium durian product website with elegant branding marketplace." },
  { id: 13, image: "/images/server-monitoring.png", title: "Server Monitoring", desc: "Realtime server performance and uptime monitoring dashboard." },
  { id: 14, image: "/images/grup-rumah-makan-monitoring.png", title: "Restaurant Group Monitoring", desc: "Revenue, performance, and outlet monitoring for restaurant groups." },
  { id: 15, image: "/images/grup-toko-monitoring.png", title: "Retail Store Monitoring", desc: "Comprehensive monitoring system for retail stores and franchises." },
];

const ProductsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // tandai kalo page udah selesai load
    const handleLoad = () => setIsPageLoaded(true);
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % products.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + products.length) % products.length);
    }
  };

  return (
    <section className="pb-16 pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container">
        <h2 className="text-center text-4xl font-extrabold mb-14 text-gray-900 dark:text-white tracking-wide">
          ✨ Featured Products by CUK PRODEV ✨
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, index) => (
            <div
              key={p.id}
              className="relative bg-white/80 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {isPageLoaded ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-60 object-cover"
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

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-400"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={36} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 text-white hover:text-gray-400"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <img
            src={products[selectedIndex].image}
            alt={products[selectedIndex].title}
            loading="lazy"
            className="max-h-[85%] max-w-[85%] rounded-2xl shadow-2xl border-4 border-white/30"
          />

          {/* Next Button */}
          <button
            className="absolute right-6 text-white hover:text-gray-400"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
