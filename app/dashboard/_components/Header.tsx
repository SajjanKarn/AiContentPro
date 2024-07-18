import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:justify-between items-center p-5 border shadow-sm">
      <div className="flex items-center gap-2 max-w-lg border-2 border-gray-200 rounded-lg p-2">
        <Search />
        <input type="text" placeholder="Search ..." className="outline-none " />
      </div>
      <div className="flex gap-2">
        <h2 className="bg-primary text-white px-3 py-2 rounded-full text-sm">
          Created With 💚 By Sajjan Karna
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
