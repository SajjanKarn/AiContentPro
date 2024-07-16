"use client";
import React, { createContext } from "react";

const CreditUsageContext = createContext<{
  totalUsage: number;
  setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
}>({
  totalUsage: 0,
  setTotalUsage: () => {},
});

export const CreditUsageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [totalUsage, setTotalUsage] = React.useState<number>(0);

  return (
    <CreditUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </CreditUsageContext.Provider>
  );
};

export default CreditUsageContext;
