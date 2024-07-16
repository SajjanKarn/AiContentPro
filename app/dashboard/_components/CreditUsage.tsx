import { Progress } from "@/components/ui/progress";
import React from "react";

const CreditUsage: React.FC = () => {
  return (
    <div className="bg-[#202740] p-5 rounded-md">
      <h1 className="text-lg text-white font-bold">Credit Usage</h1>

      <div className="w-full">
        <Progress
          value={30}
          className="bg-[#393f55] mt-3"
          // change the fill color of the progress bar
        />
      </div>

      <p className="text-white text-sm mt-3">30 / 100 credits used</p>
    </div>
  );
};

export default CreditUsage;
