"use client";

import { BASE_ROUTES, ROUTES } from "@/constants/route";
import { usePathname } from "next/navigation";

export default function PageName() {
  const path = usePathname();

  const formattedPath = () => {
    if (path === BASE_ROUTES.dashboard) {
      return "Dashboard";
    } else if (path === BASE_ROUTES.invoice) {
      return "Invoice";
    } else if (path === ROUTES.createInvoice) {
      return "Create your invoice";
    } else {
      return "Dashboard";
    }
  };

  return (
    <h1 className="text-2xl font-besley text-black font-semibold">
      {formattedPath()}
    </h1>
  );
}
