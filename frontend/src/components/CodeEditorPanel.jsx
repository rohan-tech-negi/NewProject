import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

const CodeEditorPanel = ({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) => {
  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        
      </div>
    </div>
  )
}

export default CodeEditorPanel