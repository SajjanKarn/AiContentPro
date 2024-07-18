import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Setting: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-3">
      <UserProfile />
    </div>
  );
};

export default Setting;
