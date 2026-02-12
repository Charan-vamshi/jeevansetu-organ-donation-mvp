"use client";

import { useState } from "react";

const hospitals = [
  "Apollo Hospital",
  "Manipal Hospital",
  "Fortis Hospital",
  "Narayana Health",
  "Aster CMI",
];

const initialRequests = [
  {
    id: 1,
    name: "Ravi Kumar",
    organ: "Kidney",
    bloodGroup: "O+",
    urgency: "High",
    status: "Pending",
    hospital: "",
  },
  {
    id: 2,
    name: "Anita Sharma",
    organ: "Liver",
    bloodGroup: "A+",
    urgency: "Medium",
    status: "Pending",
    hospital: "",
  },
];

export default function RequestTable() {
  const [requests, setRequests] = useState(initialRequests);

  const assignHospital = (id: number, hospital: string) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, hospital, status: "Assigned" }
          : req
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
            <th>Assign Hospital</th>
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
                <select
                  className="bg-[#0B0F14] border border-white/10 p-2 rounded"
                  value={req.hospital}
                  onChange={(e) =>
                    assignHospital(req.id, e.target.value)
                  }
                >
                  <option value="">Select Hospital</option>
                  {hospitals.map((hosp, i) => (
                    <option key={i} value={hosp}>
                      {hosp}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
