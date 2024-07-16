"use client";
import React from "react";
import SearchBar from "./_components/SearchBar";

import TemplateList from "./_components/TemplateList";

const Dashboard: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");

  return (
    <div>
      <SearchBar value={searchInput} onChange={setSearchInput} />

      <div className="pt-5">
        <TemplateList searchInput={searchInput} />
      </div>
    </div>
  );
};

export default Dashboard;
