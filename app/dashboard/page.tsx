"use client";

import { useEffect, useState } from "react";
import { getRequests, Request } from "@/data/store";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function UserDashboard() {
  const [data, setData] = useState<Request[]>([]);

  useEffect(() => {
    setData(getRequests());
  }, []);

  const requests = data.filter((r) => r.type === "request").length;
  const donations = data.filter((r) => r.type === "donation").length;
  const approved = data.filter((r) => r.status === "Approved").length;

  const chartData = [
    { name: "Requests", value: requests },
    { name: "Donations", value: donations },
  ];

  const hospitals = [
    { name: "Apollo Hospital", location: "Bangalore" },
    { name: "Manipal Hospital", location: "Bangalore" },
    { name: "Fortis Hospital", location: "Delhi" },
    { name: "Narayana Health", location: "Bangalore" },
  ];

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto space-y-12">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-semibold text-white"
      >
        Dashboard Overview
      </motion.h1>

      {/* 🔥 Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Requests", value: requests },
          { label: "Donations", value: donations },
          { label: "Approved", value: approved },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#84a98c]/40 to-transparent"
          >
            <div className="glass p-6 rounded-xl">
              <p className="text-gray-400 text-sm">{item.label}</p>
              <h2 className="text-3xl text-white mt-2 font-semibold">
                {item.value}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📊 Chart */}
      <div className="glass p-6 h-80 rounded-xl">
        <h2 className="text-white mb-4 text-lg font-medium">
          Activity Overview
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={50}>
            <CartesianGrid stroke="#ffffff10" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#aaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #84a98c30",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="value"
              fill="#84a98c"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ⚡ Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/request">
          <div className="glass p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-white text-lg">Request Organ</h3>
            <p className="text-gray-400 text-sm mt-1">
              Submit a new organ request
            </p>
          </div>
        </Link>

        <Link href="/donate">
          <div className="glass p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-white text-lg">Donate Organ</h3>
            <p className="text-gray-400 text-sm mt-1">
              Register as a donor
            </p>
          </div>
        </Link>
      </div>

      {/* 🏥 Hospitals */}
      <div className="space-y-4">
        <h2 className="text-xl text-white font-medium">
          Partner Hospitals
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="glass p-4 rounded-xl flex justify-between items-center hover:scale-[1.02] transition"
            >
              <div>
                <p className="text-white">{h.name}</p>
                <p className="text-gray-400 text-sm">{h.location}</p>
              </div>

              <span className="text-xs px-3 py-1 bg-green-600/20 text-green-400 rounded-full">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}