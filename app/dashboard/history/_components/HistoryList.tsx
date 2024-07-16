import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import returnIcon from "@/utils/Icon";
import { AiOutput } from "@/utils/schema";
import { Copy } from "lucide-react";
import Image from "next/image";
import React from "react";

const fetchHistory = async () => {
  try {
    const result = await db.select().from(AiOutput);
    return result;
  } catch (error) {
    console.error(error);
  }

  return [];
};

const HistoryList: React.FC = async () => {
  const result = await fetchHistory();

  return (
    <div className="p-5 shadow-md border rounded-md">
      <h1 className="text-2xl font-bold">History</h1>
      <p className="text-gray-600">
        Search your previously generated AI Content.
      </p>

      <div className="mt-5">
        {result && result?.length === 0 && (
          <>
            <h1 className="text-4xl font-semibold text-center">
              No history found
            </h1>
            <p className="text-center mt-3 text-gray-600">
              Generate AI content to see history
            </p>
          </>
        )}

        {/* table header */}
        {result && result?.length > 0 && (
          <div className="grid grid-cols-5">
            <div className="font-semibold col-span-1 bg-gray-900 p-3 text-white uppercase">
              Template
            </div>
            <div className="font-semibold col-span-2 bg-gray-900 p-3 text-white uppercase">
              Ai response
            </div>
            <div className="font-semibold col-span-1 bg-gray-900 p-3 text-white uppercase">
              Date
            </div>
            <div className="font-semibold col-span-1 bg-gray-900 p-3 text-white uppercase">
              copy
            </div>
          </div>
        )}

        {result?.map((history) => (
          <div
            key={history.id}
            className="grid grid-cols-5 py-5 gap-5 border-t"
          >
            <div className="col-span-1 flex items-center gap-3">
              <Image
                src={returnIcon(history.templateSlug)?.icon as string}
                alt={returnIcon(history.templateSlug)?.name || "icon"}
                width={30}
                height={30}
              />
              {returnIcon(history.templateSlug)?.name}
            </div>
            <p className="col-span-2 line-clamp-3">{history.aiResponse}</p>
            <div className="col-span-1">
              {history?.createdAt &&
                new Date(history?.createdAt).toLocaleString()}
            </div>
            <div className="col-span-1">
              <Button variant="ghost">
                <Copy className="mr-2" />
                Copy
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
