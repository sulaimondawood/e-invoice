"use client";

import { usePathname } from "next/navigation";

export default function PageName() {
  const path = usePathname();

  const formattedPath = () => {
    if (path === "/dashboard") {
      return "Dashboard";
    } else if (path === "/dashboard/invoice") {
      return "Invoice";
    } else {
      return "Dashboard";
    }
  };

  return (
    <h1 className="text-3xl text-black font-semibold">{formattedPath()}</h1>
  );
}
