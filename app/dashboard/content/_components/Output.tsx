import React, { useEffect } from "react";
import { Copy } from "lucide-react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

type OutputProps = {
  output: string;
  loading?: boolean;
};

const Output: React.FC<OutputProps> = ({ output, loading }) => {
  const editorRef: any = React.useRef(null);

  useEffect(() => {
    if (output) {
      editorRef.current.getInstance().setMarkdown(output);
    }
  }, [output]);

  return (
    <div className="border shadow-md rounded-md">
      <Toaster />
      <div className="p-5 flex items-center justify-between">
        <h2 className="font-bold text-xl">Your Result</h2>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(output as string);
            toast.success("Copied to clipboard");
          }}
        >
          <Copy className="mr-2" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default Output;
