import { useState } from "react";

const products = [
  { id: 1, image: "/images/medsos.png" },
  { id: 2, image: "/images/market.png" },
  { id: 3, image: "/images/kasir.png" },
  { id: 4, image: "/images/g-ride.png" },
  { id: 5, image: "/images/inventory.png" },
  { id: 6, image: "/images/parkir.png" },
];

const Features = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <h2 className="text-center text-2xl font-bold mb-10">
          Produk Unggulan
        </h2>

        {/* Grid Gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="cursor-pointer">
              <img
                src={p.image}
                alt={`Produk ${p.id}`}
                className="rounded-lg shadow-md w-full h-64 object-cover hover:opacity-80"
                onClick={() => setSelectedImage(p.image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Fullscreen */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Produk Fullscreen"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Features;
