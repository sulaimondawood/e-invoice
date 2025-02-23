import SideBar, { MobileNavigation } from "@/components/global/side-bar";
import { userAuthenticated } from "@/helpers/session";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  userAuthenticated();

  return (
    <div>
      <div className="min-h-screen w-full md:flex">
        <aside className="hidden md:flex flex-col h-screen px-4 pt-6 pb-8 md:basis-[220px] lg:basis-[250px] bg-white  border-r border-[#E4E4E4]">
          <header>
            <Link href={"/"} className="flex gap-2 items-center">
              <div className="relative size-7">
                <Image src={"/logo.png"} alt="logo" fill />
              </div>
              <p className="text-[18020C] font-bold text-2xl">Invoicing.</p>
            </Link>
          </header>
          <Fragment>
            <SideBar />
          </Fragment>
        </aside>
        <aside className="flex-grow bg-[#F4F5F6] h-screen">
          <MobileNavigation />
          <div className="px-6 overflow-auto">{children}</div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
