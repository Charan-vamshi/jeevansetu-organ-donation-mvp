"use client";

import { useState } from "react";
import { requests } from "@/data/store";

export default function DonateForm() {
  const [form, setForm] = useState({
    name: "",
    organ: "",
    bloodGroup: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newDonation = {
      id: Date.now(),
      ...form,
      urgency: "Low",
      status: "Pending",
      hospital: "",
      type: "donation" as const,
    };

    requests.push(newDonation);

    setForm({
      name: "",
      organ: "",
      bloodGroup: "",
    });

    alert("Donation submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl text-white font-semibold mb-4">
        Donate Organ
      </h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white"
        required
      />

      <input
        placeholder="Organ"
        value={form.organ}
        onChange={(e) => setForm({ ...form, organ: e.target.value })}
        className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white"
        required
      />

      <input
        placeholder="Blood Group"
        value={form.bloodGroup}
        onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
        className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white"
        required
      />

      <button type="submit" className="glass-button w-full">
        Submit Donation
      </button>
    </form>
  );
}