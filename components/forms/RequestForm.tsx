"use client";

import { useState } from "react";
import { addRequest } from "@/data/store";
export default function RequestForm() {
  const [form, setForm] = useState({
    name: "",
    organ: "",
    bloodGroup: "",
    urgency: "Low",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newRequest = {
      id: Date.now(),
      ...form,
      status: "Pending",
      hospital: "",
      type: "request" as const,
    };

    // add to global store
    addRequest(newRequest);

    // reset form
    setForm({
      name: "",
      organ: "",
      bloodGroup: "",
      urgency: "Low",
    });

    alert("Request submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl text-white font-semibold mb-4">
        Request Organ
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

      <select
        value={form.urgency}
        onChange={(e) => setForm({ ...form, urgency: e.target.value })}
        className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit" className="glass-button w-full">
        Submit Request
      </button>
    </form>
  );
}