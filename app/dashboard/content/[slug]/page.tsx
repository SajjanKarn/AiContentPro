"use client";
import React from "react";
import Form from "../_components/Form";
import Output from "../_components/Output";
import Templates, { Template } from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type ContentProps = {
  params: {
    slug: string;
  };
};

const Content: React.FC<ContentProps> = ({ params: { slug } }) => {
  const selectedTemplate: Template | undefined = Templates?.find(
    (template) => template.slug === slug
  );

  const GenerateAIContent = (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Go Back
        </Button>
      </Link>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <Form
            selectedTemplate={selectedTemplate}
            userFormInput={GenerateAIContent}
          />
        </div>

        <div className="col-span-2">
          <Output />
        </div>
      </div>
    </div>
  );
};

export default Content;
