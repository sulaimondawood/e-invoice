"use client";

import Link from "next/link";
import { Bolt, BookMinus, LayoutDashboardIcon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

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
                ? "bg-black text-white rounded-md"
                : "text-[#667085] hover:text-black"
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

export const MobileNavigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="md:hidden overflow-hidden">
      <header className="fixed top-0 left-0 bg-white p-4 flex items-center justify-between w-full ">
        <Link href={"/"} className="flex gap-2 items-center">
          <div className="relative size-7">
            <Image src={"/logo.png"} alt="logo" fill />
          </div>
          <p className="text-[#18020C] font-bold text-2xl">Invoice.</p>
        </Link>
        <button
          onClick={() => setNavOpen(!isNavOpen)}
          className="p-2 bg-primary text-primary-foreground rounded-md relative size-10 flex items-center justify-center"
        >
          <X
            className={`${
              isNavOpen
                ? "visible scale-100 translate-y-0 opacity-100"
                : "invisible scale-90 translate-y-10 opacity-0"
            } absolute transition-all duration-300 `}
          />

          <Menu
            className={`${
              !isNavOpen
                ? "visible scale-100 translate-y-0 opacity-100"
                : "invisible scale-90 translate-y-10 opacity-0"
            } absolute transition-all duration-300 `}
          />
        </button>
      </header>
      <div
        className={`${
          isNavOpen ? "translate-x-0 visible" : "-translate-x-full invisible"
        } w-[80%] bg-white h-screen fixed top-0 left-0 px-6 pt-6 transition-all duration-500 ease-in-out`}
      >
        <Link href={"/"} className="flex gap-2 items-center">
          <div className="relative size-7">
            <Image src={"/logo.png"} alt="logo" fill />
          </div>
          <p className="text-[18020C] font-bold text-2xl">Invoicing.</p>
        </Link>
        <SideBar />
      </div>
    </div>
  );
};
