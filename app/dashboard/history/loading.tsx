"use client";

import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2Icon size="64" className="animate-spin" />
    </div>
  );
};

export default Loading;
