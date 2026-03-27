"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import RequestTable from "@/components/admin/RequestTable";
import { getRequests, Request } from "@/data/store";
import EmptyState from "@/components/ui/EmptyState";

export default function AdminPage() {
  const router = useRouter();
  const [data, setData] = useState<Request[]>([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") router.push("/login");

    const interval = setInterval(() => {
      setData(getRequests());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const requests = data.filter(r => r.type === "request");
  const donations = data.filter(r => r.type === "donation");

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto space-y-10">

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl">
        Admin Dashboard
      </motion.h1>

      <div>
        <h2 className="text-xl mb-4">Requests</h2>
        {requests.length === 0 ? (
          <EmptyState text="No requests yet" />
        ) : (
          <RequestTable />
        )}
      </div>

      <div>
        <h2 className="text-xl mb-4">Donations</h2>
        {donations.length === 0 ? (
          <EmptyState text="No donations yet" />
        ) : (
          <RequestTable />
        )}
      </div>

    </main>
  );
}