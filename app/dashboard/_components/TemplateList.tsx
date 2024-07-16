"use client";
import React, { useEffect } from "react";
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

type TemplateListProps = {
  searchInput: string;
};

const TemplateList: React.FC<TemplateListProps> = ({ searchInput }) => {
  const [templates, setTemplates] = React.useState<Template[]>(Templates);

  useEffect(() => {
    if (searchInput) {
      const filteredTemplates = Templates.filter((template) =>
        template.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplates(filteredTemplates);
    } else {
      setTemplates(Templates);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {searchInput && templates.length === 0 && (
        <div className="text-center col-span-full">
          <h2 className="text-3xl font-bold">No templates found</h2>
          <p className="text-gray-500 mt-3">
            We couldn't find any templates matching your search.
          </p>
        </div>
      )}

      {templates.map((template: Template, index: number) => (
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
