/ app/admin/dashboard/page.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("adminAuthenticated") !== "true") {
      router.replace("/admin");
    }
  }, [router]);

  return (
    <div style={{ padding: "3rem" }}>
      <h1>Welcome to the Admin Dashboard!</h1>
      <p>You are logged in.</p>
      <button onClick={() => {
        localStorage.removeItem("adminAuthenticated");
        router.push("/admin");
      }}>
        Logout
      </button>
    </div>
  );
}
