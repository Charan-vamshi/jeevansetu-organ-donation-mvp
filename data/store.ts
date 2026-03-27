export type Request = {
  id: number;
  name: string;
  organ: string;
  bloodGroup: string;
  urgency: string;
  status: string;
  hospital: string;
  type: "request" | "donation";
};

const STORAGE_KEY = "jeevansetu_requests";

export const getRequests = (): Request[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveRequests = (data: Request[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addRequest = (req: Request) => {
  const current = getRequests();
  current.push(req);
  saveRequests(current);
};