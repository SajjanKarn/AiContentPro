"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const ClipBoard = ({ value }: { value: string }) => {
  return (
    <>
      <Toaster />
      <Button
        variant="ghost"
        onClick={() => {
          navigator.clipboard.writeText(value);
          toast.success("Copied to clipboard", {
            position: "bottom-right",
          });
        }}
      >
        <Copy className="mr-2" />
        Copy
      </Button>
    </>
  );
};

export default ClipBoard;
