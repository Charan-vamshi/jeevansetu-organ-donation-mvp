"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/motionVariants";

export default function Navbar() {
  return (
    <motion.nav
      variants={fadeIn as any}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-semibold text-lg tracking-wide">
          JeevanSetu
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-300">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/organs" className="transition hover:text-white">
            Organs
          </Link>

          <Link href="/admin" className="transition hover:text-white">
            Admin
          </Link>

          <Link href="/hospital" className="transition hover:text-white">
            Hospital
          </Link>

          <Link href="/help" className="transition hover:text-white">
            Help
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
