import React from "react";
import SearchBar from "./_components/SearchBar";

import TemplateList from "./_components/TemplateList";

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Search Bar */}
      <SearchBar />

      <div className="pt-5">
        <TemplateList />
      </div>
    </div>
  );
};

export default Dashboard;
