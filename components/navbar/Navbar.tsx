"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const getRoleBadge = () => {
    if (role === "admin") {
      return <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">Admin Panel</span>;
    }
    if (role === "hospital") {
      return <span className="px-3 py-1 text-xs rounded-full bg-green-600 text-white">Hospital Panel</span>;
    }
    if (role === "user") {
      return <span className="px-3 py-1 text-xs rounded-full bg-gray-600 text-white">User Panel</span>;
    }
    return null;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-white">Life</span>
          <span className="text-[#84a98c] relative">
            Bridge
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#84a98c] opacity-60"></span>
          </span>
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-6 text-gray-300">

          {/* Role badge */}
          {getRoleBadge()}

          {/* User */}
          {role === "user" && (
            <>
              <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
              <Link href="/organs" className="hover:text-white">Organs</Link>
              <Link href="/help" className="hover:text-white">Help</Link>
            </>
          )}

          {/* Admin */}
          {role === "admin" && (
            <Link href="/admin" className="hover:text-white">Dashboard</Link>
          )}

          {/* Hospital */}
          {role === "hospital" && (
            <Link href="/hospital" className="hover:text-white">Dashboard</Link>
          )}

          {/* Login */}
          {!role && (
            <Link href="/login" className="hover:text-white">Login</Link>
          )}

          {/* Logout */}
          {role && (
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
    </nav>
  );
}