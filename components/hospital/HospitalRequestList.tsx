"use client";

import { useState } from "react";

const initialRequests = [
  {
    id: 1,
    name: "Ravi Kumar",
    organ: "Kidney",
    bloodGroup: "O+",
    urgency: "High",
    status: "Assigned",
    hospital: "Apollo Hospital",
  },
  {
    id: 2,
    name: "Anita Sharma",
    organ: "Liver",
    bloodGroup: "A+",
    urgency: "Medium",
    status: "Assigned",
    hospital: "Manipal Hospital",
  },
];

export default function HospitalRequestList() {
  const [requests, setRequests] = useState(initialRequests);

  const approveRequest = (id: number) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "Approved" } : req
      )
    );
  };

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
          {requests.map((req) => (
            <tr key={req.id} className="border-b border-white/5">
              <td className="py-3">{req.name}</td>
              <td>{req.organ}</td>
              <td>{req.bloodGroup}</td>
              <td>{req.urgency}</td>
              <td>{req.status}</td>

              <td>
                {req.status !== "Approved" && (
                  <button
                    onClick={() => approveRequest(req.id)}
                    className="glass-button"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
