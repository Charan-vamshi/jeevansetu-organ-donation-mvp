"use client";

import { useState } from "react";
import { requests as globalRequests } from "@/data/store";

export default function HospitalRequestList() {
  const [requests, setRequests] = useState(globalRequests);

  const approveRequest = (id: number) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: "Approved" } : req
    );

    setRequests(updated);

    // update global store
    globalRequests.splice(0, globalRequests.length, ...updated);
  };

  // show only assigned requests
  const assignedRequests = requests.filter(
    (req) => req.status === "Assigned"
  );

  return (
    <div className="glass p-6 overflow-x-auto">
      <table className="w-full text-left text-gray-300">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-3">Name</th>
            <th>Organ</th>
            <th>Blood Group</th>
            <th>Urgency</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {assignedRequests.map((req) => (
            <tr key={req.id} className="border-b border-white/5">
              <td className="py-3">{req.name}</td>
              <td>{req.organ}</td>
              <td>{req.bloodGroup}</td>
              <td>{req.urgency}</td>
              <td>{req.status}</td>

              <td>
                <button
                  onClick={() => approveRequest(req.id)}
                  className="glass-button"
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}