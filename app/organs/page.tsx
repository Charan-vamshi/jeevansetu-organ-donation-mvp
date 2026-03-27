"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UserDashboard() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto space-y-10">

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl">
        Welcome
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/request">
          <div className="glass p-6 cursor-pointer hover:scale-105">
            Request Organ
          </div>
        </Link>

        <Link href="/donate">
          <div className="glass p-6 cursor-pointer hover:scale-105">
            Donate Organ
          </div>
        </Link>
      </div>

    </main>
  );
}