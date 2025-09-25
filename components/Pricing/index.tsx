"use client";

import React from "react";

// ---------- SectionTitle ----------
function SectionTitle({
  subtitle,
  title,
  paragraph,
  center,
}: {
  subtitle: string;
  title: string;
  paragraph: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="mb-2 block text-lg font-semibold text-primary">
        {subtitle}
      </span>
      <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
        {paragraph}
      </p>
    </div>
  );
}

// ---------- OfferList ----------
function OfferList({ text }: { text: string }) {
  return (
    <p className="mb-2 flex items-center text-gray-700 dark:text-gray-300">
      • {text}
    </p>
  );
}

// ---------- PricingBox ----------
function PricingBox({
  product,
}: {
  product: {
    title: string;
    price: string;
    period: string;
    isRecommended: boolean;
    features: string[];
  };
}) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className={`mb-10 overflow-hidden rounded-xl border p-8 shadow-lg
        ${
          product.isRecommended
            ? "border-primary bg-primary/5 dark:border-primary"
            : "border-gray-200 dark:border-gray-700"
        }`}
      >
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
          {product.title}
        </h3>
        <p className="mb-4 text-gray-500 dark:text-gray-400">{product.period}</p>
        <h4 className="mb-6 text-3xl font-extrabold text-primary">
          {product.price}
        </h4>

        <div className="mb-8">
          {product.features.map((feature, i) => (
            <OfferList key={i} text={feature} />
          ))}
        </div>

        {/* <button className="w-full rounded-lg bg-primary px-5 py-2 text-white hover:bg-primary/90">
          Purchase Now
        </button> */}
      </div>
    </div>
  );
}

// ---------- Main Page ----------
export default function PricingPage() {
  const pricingData = [
    {
      title: "Basic",
      price: "IDR 5,000,000+",
      period: "One-time payment",
      isRecommended: false,
      features: [
        "Server & hosting not included",
        "Ideal for small businesses, students, and startups",
        "1-month warranty",
        "Additional system features incur extra charges",
      ],
    },
    {
      title: "Premium",
      price: "IDR 10,000,000+",
      period: "One-time payment (includes 1 year of server & hosting)",
      isRecommended: true,
      features: [
        "Ideal for small businesses, students, and startups",
        "2-month warranty",
        "Additional system features incur extra charges",
      ],
    },
    {
      title: "Business",
      price: "IDR 25,000,000+",
      period: "Contract based",
      isRecommended: false,
      features: [
        "Perfect for large enterprises (best package)",
        "Warranty according to contract",
        "Additional system features incur extra charges",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      // bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]
      className="relative z-20 overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plans"
            paragraph="Choose the package that fits your project or business needs."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
