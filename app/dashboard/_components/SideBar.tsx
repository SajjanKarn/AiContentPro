"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";

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
          <div
            key={item.name}
            className={`flex items-center mt-5 cursor-pointer hover:bg-primary hover:text-white p-3 rounded-lg transition-colors
                    ${pathname === item.route && "bg-primary text-white"}
                `}
          >
            <item.icon />
            <span className="ml-3">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
