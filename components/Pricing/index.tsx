"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={center ? "text-center" : ""}
    >
      <span className="mb-2 block text-lg font-semibold text-indigo-400">
        {subtitle}
      </span>
      <h2 className="mb-4 text-4xl font-bold text-white">{title}</h2>
      <p className="mx-auto max-w-2xl text-gray-400">{paragraph}</p>
    </motion.div>
  );
}

// ---------- OfferList ----------
function OfferList({ text }: { text: string }) {
  return (
    <motion.p
      className="mb-2 flex items-center text-gray-300"
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <CheckCircle2 className="mr-2 h-5 w-5 text-indigo-400" /> {text}
    </motion.p>
  );
}

// ---------- PricingBox ----------
function PricingBox({
  product,
  index,
}: {
  product: {
    title: string;
    price: string;
    period: string;
    isRecommended: boolean;
    features: string[];
  };
  index: number;
}) {
  const handleWhatsApp = () => {
    const text = `🤖 *Selected Package: ${product.title}*\n📅 Type: ${product.period}\n\nPlease contact me, I'm interested in this AI package.`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = "6281289784331";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <motion.div
      className="w-full px-4 md:w-1/2 lg:w-1/3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        boxShadow: product.isRecommended
          ? "0 0 25px rgba(99, 102, 241, 0.6)"
          : "0 0 15px rgba(255,255,255,0.15)",
      }}
    >
      <div
        className={`mb-10 rounded-2xl border bg-gradient-to-br p-8 shadow-xl transition-all duration-300 
        ${
          product.isRecommended
            ? "border-indigo-500 from-gray-800 to-gray-900"
            : "border-gray-700 from-gray-900 to-gray-950"
        }`}
      >
        <motion.h3
          className="mb-2 text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {product.title}
        </motion.h3>
        <p className="mb-4 text-gray-400">{product.period}</p>

        <h4 className="mb-6 text-3xl font-extrabold text-indigo-400">
          {product.price}
        </h4>

        <div className="mb-8">
          {product.features.map((feature, i) => (
            <OfferList key={i} text={feature} />
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleWhatsApp}
          className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-indigo-500"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}

// ---------- Main Page ----------
export default function PricingPage() {
  const pricingData = [
    {
      title: "Essential AI",
      price: "Smart automation foundation",
      period: "For startups & small businesses",
      isRecommended: false,
      features: [
        "Deploy 1 AI Agent for workflow automation",
        "Integrate with existing business apps",
        "Basic task management & analytics",
        "Expandable with modular AI features",
      ],
    },
    {
      title: "Pro AI",
      price: "Advanced multi-agent intelligence",
      period: "For growing companies",
      isRecommended: true,
      features: [
        "AI Agent collaboration with adaptive learning",
        "Real-time data insight & decision support",
        "Custom workflow integration",
        "24/7 performance monitoring & self-optimization",
      ],
    },
    {
      title: "Enterprise AI",
      price: "Full-scale autonomous AI system",
      period: "For enterprise automation",
      isRecommended: false,
      features: [
        "AI-driven business operations with predictive control",
        "Multi-department AI orchestration",
        "Enterprise-grade data protection & encryption",
        "Continuous AI evolution & strategic insight engine",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pb-20 pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="AI Agent Packages"
            title="Choose Your AI Plan"
            paragraph="Empower your business with the next developer of the future — a smart AI Agent built to automate, learn, and scale with you."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
