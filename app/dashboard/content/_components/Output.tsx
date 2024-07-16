import React from "react";
import { Copy } from "lucide-react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Button } from "@/components/ui/button";

const Output: React.FC = () => {
  const editorRef: any = React.useRef(null);

  return (
    <div className="border shadow-md rounded-md">
      <div className="p-5 flex items-center justify-between">
        <h2 className="font-bold text-xl">Your Result</h2>
        <Button>
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
