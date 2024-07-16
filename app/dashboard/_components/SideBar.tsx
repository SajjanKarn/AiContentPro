"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Link from "next/link";
import CreditUsage from "./CreditUsage";

type MenuItem = {
  name: string;
  icon: React.FC;
  route: string;
};

type MenuList = MenuItem[];

const menuList: MenuList = [
  {
    name: "Home",
    icon: Home,
    route: "/dashboard",
  },
  {
    name: "History",
    icon: FileClock,
    route: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: WalletCards,
    route: "/dashboard/billing",
  },
  {
    name: "Setting",
    icon: Settings,
    route: "/dashboard/setting",
  },
];

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen shadow-sm border p-5">
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={100}
          className="hover:scale-105 cursor-pointer transition-transform"
        />
      </div>
      <hr className="mt-5 border" />

      <div className="mt-5">
        {menuList.map((item) => (
          <Link href={item.route} key={item.name}>
            <div
              key={item.name}
              className={`flex items-center mt-5 cursor-pointer hover:bg-primary hover:text-white p-3 rounded-lg transition-colors
                    ${pathname === item.route && "bg-primary text-white"}
                `}
            >
              <item.icon />
              <span className="ml-3">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-5 left-0 p-3 w-full">
        <CreditUsage />
      </div>
    </div>
  );
};

export default SideBar;
