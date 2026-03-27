"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HospitalRequestList from "@/components/hospital/HospitalRequestList";
import { getRequests, Request } from "@/data/store";
import EmptyState from "@/components/ui/EmptyState";

export default function HospitalPage() {
  const router = useRouter();
  const [data, setData] = useState<Request[]>([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "hospital") router.push("/login");

    const interval = setInterval(() => {
      setData(getRequests());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const assigned = data.filter(r => r.status === "Assigned");

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto space-y-10">

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl">
        Hospital Dashboard
      </motion.h1>

      {assigned.length === 0 ? (
        <EmptyState text="No assigned requests" />
      ) : (
        <HospitalRequestList />
      )}

    </main>
  );
}