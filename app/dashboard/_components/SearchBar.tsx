import { Search } from "lucide-react";
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center flex-col gap-3 justify-center p-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <h2 className="text-white text-3xl font-bold">Browse All Templates</h2>
      <p className="text-white font-medium">
        What would you like to create today?
      </p>

      <div className="flex items-center gap-2  text-white bg-gray-800 p-4 rounded-lg md:w-[50%] mt-5">
        <Search />
        <input
          type="text"
          placeholder="Search for templates"
          className="outline-none bg-inherit"
        />
      </div>
    </div>
  );
};

export default SearchBar;
