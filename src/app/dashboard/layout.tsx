import SideBar, { MobileNavigation } from "@/components/global/side-bar";
import { auth } from "@/lib/auth/auth";
import { Bell, ChevronDown, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="h-screen w-full md:flex">
      <aside className="hidden md:flex flex-col h-screen px-4 pt-6 pb-8 md:min-w-[220px] lg:min-w-[250px] bg-white border-r border-[#E4E4E4]">
        <header>
          <Link href={"/"} className="flex gap-2 items-center">
            <div className="relative size-7">
              <Image src={"/logo.png"} alt="logo" fill />
            </div>
            <p className="text-[#18020C] font-bold text-2xl">Invoicing.</p>
          </Link>
        </header>
        <SideBar />
      </aside>
      <aside className="flex-grow bg-[#F4F5F6] h-screen">
        <MobileNavigation />
        <section className="h-screen overflow-y-auto">
          <header className="hidden md:flex justify-end bg-white p-5">
            <div className="flex items-center gap-4">
              <button>
                <Bell color="#667085" />
              </button>
              <div className="w-[1px] h-1/2 bg-[#E0E2E7]"></div>
              <button className="flex items-center justify-center gap-4 transition-all duration-300 ease-in-out">
                <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <UserRound color="#667085" size={24} />
                </div>
                <div className="flex gap-1 flex-col items-start">
                  <p className="text-[#333843] font-semibold">
                    {session.user.name || "User"}
                  </p>
                  <p className="text-[#667085] font-normal text-sm">
                    {session.user.email}
                  </p>
                </div>
                <ChevronDown color="#667085" size={20} />
              </button>
            </div>
          </header>
          <div className="px-6">{children}</div>
        </section>
      </aside>
    </div>
  );
};

export default DashboardLayout;
