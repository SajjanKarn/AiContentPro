"use client";
import React from "react";
import Form from "../_components/Form";
import Output from "../_components/Output";
import Templates, { Template } from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";

type ContentProps = {
  params: {
    slug: string;
  };
};

const Content: React.FC<ContentProps> = ({ params: { slug } }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [output, setOutput] = React.useState<string>("");

  const selectedTemplate: Template | undefined = Templates?.find(
    (template) => template.slug === slug
  );

  const GenerateAIContent = async (formData: any) => {
    try {
      setLoading(true);
      const prompt = selectedTemplate?.aiPrompt;
      const finalPrompt = JSON.stringify(formData) + ", " + prompt;

      console.log(finalPrompt);

      const result = await chatSession.sendMessage(finalPrompt);
      setOutput(result?.response?.text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            loading={loading}
          />
        </div>

        <div className="col-span-2">
          <Output output={output} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Content;