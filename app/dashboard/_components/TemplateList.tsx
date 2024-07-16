import React from "react";
import Templates from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";

interface Template {
  name: string;
  desc: string;
  category: string;
  icon: string;
  slug: string;
  aiPrompt: string;
  form: Form[];
}

interface Form {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Templates.map((template: Template, index: number) => (
        <TemplateCard
          key={index}
          name={template.name}
          icon={template.icon}
          description={template.desc}
          slug={template.slug}
        />
      ))}
    </div>
  );
};

export default TemplateList;
