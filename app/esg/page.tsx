"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Leaf, Zap, Recycle, Users, Moon } from "lucide-react";
import ESGDashboard from "./Dashboard";

export default function HomePage() {
  const carbonRef = useRef<HTMLCanvasElement | null>(null);
  const energyRef = useRef<HTMLCanvasElement | null>(null);
  const carbonChartRef = useRef<any>(null);
  const energyChartRef = useRef<any>(null);

  useEffect(() => {
    // destroy kalau ada (safety saat hot-reload)
    if (carbonChartRef.current) {
      carbonChartRef.current.destroy();
      carbonChartRef.current = null;
    }
    if (energyChartRef.current) {
      energyChartRef.current.destroy();
      energyChartRef.current = null;
    }

    // Carbon (line)
    if (carbonRef.current) {
      carbonChartRef.current = new Chart(carbonRef.current, {
        type: "line",
        data: {
          labels: ["2019", "2020", "2021", "2022", "2023"],
          datasets: [
            {
              label: "Emisi CO₂ (Ton)",
              data: [120, 110, 90, 80, 70],
              borderColor: "#16a34a",
              backgroundColor: "rgba(22,163,74,0.12)",
              fill: true,
              tension: 0.35,
              pointRadius: 4,
              pointBackgroundColor: "#16a34a",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, labels: { color: "#374151" } },
          },
          scales: {
            x: { ticks: { color: "#374151" }, grid: { color: "#f3f4f6" } },
            y: { ticks: { color: "#374151" }, grid: { color: "#f3f4f6" } },
          },
        },
      });
    }

    // Energy (bar)
    if (energyRef.current) {
      energyChartRef.current = new Chart(energyRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
          datasets: [
            {
              label: "Energi (MWh)",
              data: [500, 480, 450, 430, 400],
              backgroundColor: "#16a34a",
              borderRadius: 6,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, labels: { color: "#374151" } },
          },
          scales: {
            x: { ticks: { color: "#374151" }, grid: { display: false } },
            y: { ticks: { color: "#374151" }, grid: { color: "#f3f4f6" } },
          },
        },
      });
    }

    // cleanup saat unmount
    return () => {
      if (carbonChartRef.current) {
        carbonChartRef.current.destroy();
        carbonChartRef.current = null;
      }
      if (energyChartRef.current) {
        energyChartRef.current.destroy();
        energyChartRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* MASUKIN SINI ASU */}
     
      {/* MAIN (centered frame) */}
      <main className="flex-1 py-10" style={{paddingTop:'100px'}}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Frame wrapper */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
             <ESGDashboard/>
          </div>
        </div>
      </main>

    </div>
  );
}
