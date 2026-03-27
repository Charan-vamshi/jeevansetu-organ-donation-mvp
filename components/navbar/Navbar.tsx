"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/motionVariants";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <motion.nav
      variants={fadeIn as any}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white font-semibold text-lg">
          JeevanSetu
        </h1>

        <div className="flex items-center gap-6 text-gray-300">
          {/* Common Navigation */}
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/organs" className="hover:text-white">
            Organs
          </Link>
          <Link href="/help" className="hover:text-white">
            Help
          </Link>

          {/* Role-Based Navigation */}
          {role === "admin" && (
            <Link href="/admin" className="hover:text-white">
              Admin
            </Link>
          )}

          {role === "hospital" && (
            <Link href="/hospital" className="hover:text-white">
              Hospital
            </Link>
          )}

          {/* Auth */}
          {!role ? (
            <Link href="/login" className="hover:text-white">
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("role");
                window.location.href = "/login";
              }}
              className="glass-button text-sm"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}