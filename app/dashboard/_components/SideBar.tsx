import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import React from "react";

type MenuItem = {
  name: string;
  icon: React.FC;
  route: string;
};

type MenuList = MenuItem[];

const SideBar: React.FC = () => {
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
            className="flex items-center mt-5 cursor-pointer hover:bg-primary hover:text-white p-3 rounded-lg transition-colors"
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
