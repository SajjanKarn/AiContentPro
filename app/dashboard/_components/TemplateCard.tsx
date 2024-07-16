import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Template {
  name: string;
  icon: string;
  description: string;
  slug: string;
}

const TemplateCard: React.FC<Template> = ({
  name,
  icon,
  description,
  slug,
}) => {
  return (
    <Link href={`/dashboard/content/${slug}`}>
      <div className="flex flex-col p-5 gap-y-3 shadow-sm border hover:scale-105 transition-all cursor-pointer hover:shadow-md">
        <div>
          <Image src={icon} alt={name} width={50} height={50} />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="line-clamp-3 mt-3 text-gray-800">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
