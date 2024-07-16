import { Search } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-5 border shadow-sm">
      <div className="flex items-center gap-2 max-w-lg border-2 border-gray-200 rounded-lg p-2">
        <Search />
        <input type="text" placeholder="Search ..." className="outline-none " />
      </div>
      <h2 className="bg-primary text-white px-3 py-2 rounded-full text-sm">
        Join membership at 10% off at just $9.99 🔥
      </h2>
    </div>
  );
};

export default Header;
