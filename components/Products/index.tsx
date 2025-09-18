"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, image: "/images/medsos.png", title: "Social Media App", desc: "A modern social platform for digital interaction." },
  { id: 2, image: "/images/market.png", title: "Marketplace App", desc: "An elegant marketplace application with sleek UI." },
  { id: 3, image: "/images/kasir.png", title: "POS System", desc: "A powerful cashier system for your business." },
  { id: 4, image: "/images/g-ride.png", title: "G-Ride", desc: "An efficient and reliable transportation app." },
  { id: 5, image: "/images/inventory.png", title: "Inventory Manager", desc: "Smart stock management with modern technology." },
  { id: 6, image: "/images/parkir.png", title: "Smart Parking", desc: "A complete smart parking solution for enterprises." },
];

const ProductsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-60 object-cover"
              />
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
