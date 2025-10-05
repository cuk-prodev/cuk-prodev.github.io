"use client";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { FaLeaf, FaBolt, FaRecycle, FaHandsHelping } from "react-icons/fa";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function ESGDashboard() {
  const carbonData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Emisi CO₂ (Ton)",
        data: [120, 110, 90, 80, 70],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        pointBorderColor: "#22c55e",
        pointBackgroundColor: "#22c55e",
      },
    ],
  };

  const energyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
    datasets: [
      {
        label: "Energi (MWh)",
        data: [500, 480, 450, 430, 400],
        backgroundColor: "#22c55e",
      },
    ],
  };

  const wasteData = [
    { jenis: "Plastik", jumlah: 12, status: "Didaur Ulang" },
    { jenis: "Kertas", jumlah: 8, status: "Didaur Ulang" },
    { jenis: "Elektronik", jumlah: 3, status: "Dibuang Aman" },
  ];

  return (
    <main className="min-h-[calc(100vh-120px)] flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[250px] bg-green-700 text-white p-6 flex flex-col space-y-6 rounded-l-2xl shadow-md">
        <div className="flex items-center space-x-2 font-bold text-lg">
          <FaLeaf /> <span>Carbon Footprint</span>
        </div>
        <div className="flex items-center space-x-2 font-bold text-lg">
          <FaBolt /> <span>Energy Consumption</span>
        </div>
        <div className="flex items-center space-x-2 font-bold text-lg">
          <FaRecycle /> <span>Waste Management</span>
        </div>
        <div className="flex items-center space-x-2 font-bold text-lg">
          <FaHandsHelping /> <span>CSR Impact</span>
        </div>
      </aside>

      {/* Konten kanan */}
      <section className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-xl font-bold mb-2">
            ESG / Sustainability Dashboard
          </h1>
          <p className="text-gray-600 mb-8">
            Monitor environmental, social & governance metrics for green compliance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carbon Footprint */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Carbon Footprint</h2>
              <Line
                data={carbonData}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "top" } },
                }}
              />
            </div>

            {/* Energy Consumption */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Energy Consumption</h2>
              <Bar
                data={energyData}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "top" } },
                }}
              />
            </div>
          </div>

          {/* Waste Management */}
          <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Waste Management</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3">Jenis Limbah</th>
                  <th className="p-3">Jumlah (Ton)</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {wasteData.map((item, i) => (
                  <tr key={i} className="border-t border-gray-200 text-gray-700">
                    <td className="p-3">{item.jenis}</td>
                    <td className="p-3">{item.jumlah}</td>
                    <td className="p-3">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
