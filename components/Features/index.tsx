"use client";
import { motion } from "framer-motion";
import { Cpu, Bot, Code2, Rocket, Brain, Zap } from "lucide-react";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: Bot,
      title: "Smart AI Agent — The Next Developer of the Future",
      description:
        "An autonomous digital worker that acts as your company’s brain. One pilot can now lead an entire AI-driven workforce — replacing thousands of repetitive tasks, cutting operational costs, and optimizing every process automatically.",
    },
    {
      id: 2,
      icon: Code2,
      title: "AI Code Generator",
      description:
        "Generate production-ready code up to 70% faster. From frontend to backend, the AI understands your needs and creates complete modules with precision — guided only by one human pilot overseeing the AI’s workflow.",
    },
    {
      id: 3,
      icon: Brain,
      title: "Predictive Business Intelligence",
      description:
        "Transform your business data into insights that make decisions for you. The AI continuously analyzes operations, detects inefficiencies, and suggests improvements before you even notice the problem.",
    },
    {
      id: 4,
      icon: Rocket,
      title: "Autonomous Workflow Automation",
      description:
        "From HR to finance, AI Agents handle repetitive processes with zero fatigue. Scale your company faster by letting intelligent automation take over routine tasks — giving humans time to innovate.",
    },
    {
      id: 5,
      icon: Cpu,
      title: "Adaptive Learning System",
      description:
        "Your AI evolves with every action. It learns company behavior, adjusts workflows, and improves performance automatically. The longer it runs, the smarter it becomes.",
    },
    {
      id: 6,
      icon: Zap,
      title: "Next-Gen Integration",
      description:
        "Seamlessly connects with existing systems, APIs, and tools. Whether it’s IoT devices, cloud databases, or digital dashboards — Smart AI Agents adapt instantly to your tech ecosystem.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#0a0f1f] to-[#0c1224] py-24 text-white">
      {/* Efek latar belakang biru */}
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
            Smart AI Technology
          </h2>
          <h3 className="mt-3 text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
            The Next Developer of the Future
          </h3>
          <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
            Experience the revolution of AI Agents — where one pilot controls an
            entire digital workforce. From intelligent automation to rapid code
            generation, Smart AI builds, learns, and scales your business faster
            than ever.
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-3xl text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Example Video */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            AI Agent in Action
          </h3>
          <div className="w-full md:w-2/3 mx-auto aspect-video rounded-xl overflow-hidden">
            <video
              src="/cuk 3-1_Clip.mp4"
              controls
              controlsList="nodownload"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
