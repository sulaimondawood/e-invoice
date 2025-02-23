"use client";

import Link from "next/link";
import { Bolt, BookMinus, LayoutDashboardIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const dashboardLinks = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboardIcon />,
  },
  {
    name: "Invoice",
    link: "/dashboard/invoice",
    icon: <BookMinus />,
  },
  {
    name: "Billings",
    link: "/dashboard/billings",
    icon: <LayoutDashboardIcon />,
  },
  {
    name: "Settings",
    link: "/dashboard/settings",
    icon: <Bolt />,
  },
];

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="mt-5 py-6 flex flex-col gap-3">
      {dashboardLinks.map((data, idx) => {
        return (
          <Link
            href={data.link}
            key={idx}
            className={`${
              pathname === data.link
                ? "bg-[#1EB386] text-white rounded-md"
                : "text-[#667085] hover:text-[#1EB386]"
            } flex items-center gap-2 p-3 transition-all duration-100`}
          >
            {data.icon}
            <p> {data.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
