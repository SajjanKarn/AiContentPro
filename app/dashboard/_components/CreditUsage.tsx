"use client";
import CreditUsageContext from "@/app/(context)/CreditUsage";
import { Progress } from "@/components/ui/progress";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

const CreditUsage: React.FC = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = React.useContext(CreditUsageContext);

  useEffect(() => {
    user && getTotalUsage();
  }, [user]);

  const getTotalUsage = async () => {
    const result = await db
      .select()
      .from(AiOutput)
      // @ts-ignore
      .where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    let total: number = 0;
    result.forEach((item) => {
      total = total + Number(item.aiResponse?.length);
    });

    setTotalUsage(total);
  };

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

      <p className="text-white text-sm mt-3">
        {totalUsage.toLocaleString()} / 20,000 credits used
      </p>
    </div>
  );
};

export default CreditUsage;
