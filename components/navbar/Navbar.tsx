"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <img src="/logo.svg" alt="logo" className="h-8" />

        <div className="flex gap-6 text-gray-300">

          {role === "user" && (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/organs">Organs</Link>
              <Link href="/help">Help</Link>
            </>
          )}

          {role === "admin" && <Link href="/admin">Admin</Link>}
          {role === "hospital" && <Link href="/hospital">Hospital</Link>}

          {role && (
            <button
              onClick={() => {
                localStorage.removeItem("role");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}