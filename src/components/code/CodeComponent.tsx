import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import dart from "highlight.js/lib/languages/dart";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

hljs.registerLanguage("dart", dart);

type Props = {
  code: string;
};

function CodeComponent({ code }: Props) {
  const highlightedCode = hljs.highlight(code, {
    language: "dart",
  }).value;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <section className="my-2 rounded-lg relative w-full max-w-60 min-[350px]:max-w-72 min-[450px]:max-w-96 sm:max-w-lg  md:max-w-xl  lg:max-w-2xl">
      <div className="flex justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="button copy code"
                onClick={copyToClipboard}
                className="absolute bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-1 rounded-md"
              >
                <Copy className=" w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        className="w-full bg-slate-100 dark:bg-slate-900/70 rounded-lg overflow-auto"
      >
        <pre>
          <code
            className="inline-block px-4 py-3 text-sm language-dart"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </section>
  );
}

export default CodeComponent;