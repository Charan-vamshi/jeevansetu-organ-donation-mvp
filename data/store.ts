export type Request = {
  id: number;
  name: string;
  organ: string;
  bloodGroup: string;
  urgency: string;
  status: string;
  hospital: string;
};

export let requests: Request[] = [
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