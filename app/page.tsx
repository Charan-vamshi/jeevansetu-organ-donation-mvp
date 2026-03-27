"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // clear any existing role
    localStorage.removeItem("role");

    // always force login
    router.push("/login");
  }, []);

  return null;
}