import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="md:w-64 md:block hidden  fixed">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
