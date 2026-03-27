"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // force fresh login (no auto session)
    localStorage.removeItem("role");
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const role = username.toLowerCase();

    if (role === "admin") {
      localStorage.setItem("role", role);
      router.push("/admin");
      return;
    }

    if (role === "hospital") {
      localStorage.setItem("role", role);
      router.push("/hospital");
      return;
    }

    if (role === "user") {
      localStorage.setItem("role", role);
      router.push("/organs");
      return;
    }

    setError("Invalid credentials");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="glass p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl text-white font-semibold text-center">
          Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white"
          required
        />

        <button type="submit" className="glass-button w-full">
          Login
        </button>
      </form>
    </main>
  );
}