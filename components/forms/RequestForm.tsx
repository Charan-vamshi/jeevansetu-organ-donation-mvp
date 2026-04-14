"use client";

import { useState } from "react";
import { addRequest } from "@/data/store";
import toast from "react-hot-toast";

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

    addRequest(newRequest);
    toast.success("Request submitted");

    setForm({
      name: "",
      organ: "",
      bloodGroup: "",
      urgency: "Low",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-6 max-w-xl mx-auto space-y-4">

      <h2 className="text-xl text-white font-semibold">Request Organ</h2>

      {/* Name */}
      <div>
        <label className="text-sm text-gray-400">Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white mt-1"
          required
        />
      </div>

      {/* Organ */}
      <div>
        <label className="text-sm text-gray-400">Organ</label>
        <select
          value={form.organ}
          onChange={(e) => setForm({ ...form, organ: e.target.value })}
          className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white mt-1"
          required
        >
          <option value="">Select Organ</option>
          <option>Kidney</option>
          <option>Heart</option>
          <option>Liver</option>
          <option>Lungs</option>
          <option>Pancreas</option>
          <option>Cornea</option>
          <option>Brain</option>
        </select>
      </div>

      {/* Blood Group */}
      <div>
        <label className="text-sm text-gray-400">Blood Group</label>
        <select
          value={form.bloodGroup}
          onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
          className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white mt-1"
          required
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
      </div>

      {/* Urgency */}
      <div>
        <label className="text-sm text-gray-400">Urgency</label>
        <select
          value={form.urgency}
          onChange={(e) => setForm({ ...form, urgency: e.target.value })}
          className="w-full p-3 rounded bg-[#0B0F14] border border-white/10 text-white mt-1"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button type="submit" className="glass-button w-full">
        Submit Request
      </button>
    </form>
  );
}