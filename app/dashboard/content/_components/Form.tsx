"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Template } from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Loader2Icon } from "lucide-react";

type FormProps = {
  selectedTemplate: Template | undefined;
  userFormInput: (formData: any) => void;
  loading?: boolean;
};

const Form: React.FC<FormProps> = ({
  selectedTemplate,
  userFormInput,
  loading,
}) => {
  const [formData, setFormData] = useState<any>();

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    selectedTemplate && (
      <div className="p-5 border shadow-md rounded-md bg-white">
        <div>
          <Image
            src={selectedTemplate?.icon}
            alt={selectedTemplate?.name}
            width={50}
            height={50}
          />

          <h3 className="my-3 font-bold text-3xl text-primary">
            {selectedTemplate?.name}
          </h3>
          <p className="text-gray-600">{selectedTemplate?.desc}</p>
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mt-3">
            {selectedTemplate?.form.map((field, index) => (
              <div key={index} className="flex flex-col gap-2 mb-4">
                <label htmlFor={field.name} className="font-semibold">
                  {field.label}
                </label>
                {field.field === "input" ? (
                  <Input
                    name={field.name}
                    required={field.required}
                    onChange={handleOnChange}
                  />
                ) : field.field === "textarea" ? (
                  <Textarea
                    name={field.name}
                    required={field.required}
                    onChange={handleOnChange}
                  />
                ) : null}
              </div>
            ))}

            <Button type="submit" className="w-full py-6">
              {loading && <Loader2Icon className="animate-spin" />}
              Generate Content
            </Button>
          </div>
        </form>
      </div>
    )
  );
};

export default Form;
