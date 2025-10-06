"use client";
import { motion } from "framer-motion";
import { Shield, Layout, Layers, PlugZap } from "lucide-react";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: Shield,
      title: "Fast System & High Security",
      description:
        "Built for speed and protected by modern security standards. Enjoy blazing-fast performance with zero delays. The system is optimized for high-load handling, smooth navigation, and minimal downtime. Your data is protected with industry-grade encryption, secure APIs, and multi-layer authentication—ready for small apps or enterprise use.",
    },
    {
      id: 2,
      icon: Layout,
      title: "Modern Design",
      description:
        "A clean and professional interface made to impress. User experience meets visual elegance. The responsive layout works perfectly across devices, with minimalist design that builds user trust and boosts conversions. Fully customizable, lightweight, and ready for dark mode out of the box.",
    },
    {
      id: 3,
      icon: Layers,
      title: "SaaS Starter Kit",
      description:
        "Everything you need to launch quickly and scale with ease. No need to start from scratch. Get a solid project structure with authentication, routing, layout components, and reusable logic—all prebuilt and production-ready. Just clone, customize, and deploy. Save weeks of development time.",
    },
    {
      id: 4,
      icon: PlugZap,
      title: "All Essential Integrations",
      description:
        "Connected with tools that matter. Integrated with essential services like Google Login, payment gateways, email notifications, API layers, and more. Enable what you need and get going fast. Spend less time wiring things up, and more time building your product.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#0a0f1f] to-[#0c1224] py-24 text-white">
      {/* Efek cahaya latar belakang biru */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
            Features
          </h2>
          <h3 className="mt-3 text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
            Main Features Of Play
          </h3>
          <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
            Discover the core features that make Play powerful, fast, and ready
            for modern development. From performance to design, we’ve crafted
            everything to help you build better — faster.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-blue-500/20"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-3xl text-blue-400" />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
