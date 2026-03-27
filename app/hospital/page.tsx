"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HospitalRequestList from "@/components/hospital/HospitalRequestList";

export default function HospitalPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "hospital") {
      router.push("/login");
    }
  }, []);

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Hospital Dashboard
      </h1>

      <HospitalRequestList />
    </main>
  );
}