import React from 'react';
import { TerminalIcon, CheckCircle2Icon, AlertCircleIcon, Loader2Icon } from "lucide-react";

const OutputPanel = ({ output, isRunning }) => {
  return (
    <div className="h-full bg-base-100 flex flex-col border-t border-base-300">
      {/* Panel Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-base-200 border-b border-base-300">
        <div className="flex items-center gap-2 text-sm font-semibold text-base-content">
          <TerminalIcon className="size-4 text-primary" />
          <span>Execution Output</span>
        </div>
        {isRunning && (
          <div className="flex items-center gap-1.5 text-xs text-primary font-medium animate-pulse">
            <Loader2Icon className="size-3.5 animate-spin" />
            <span>Executing...</span>
          </div>
        )}
        {!isRunning && output && (
          <div className="flex items-center gap-1.5">
            {output.success ? (
              <span className="badge badge-success badge-sm gap-1">
                <CheckCircle2Icon className="size-3" />
                Success
              </span>
            ) : (
              <span className="badge badge-error badge-sm gap-1">
                <AlertCircleIcon className="size-3" />
                Error
              </span>
            )}
          </div>
        )}
      </div>

      {/* Output Content */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
        {isRunning ? (
          <div className="h-full flex flex-col items-center justify-center text-base-content/50 gap-2">
            <Loader2Icon className="size-6 animate-spin text-primary" />
            <p className="text-xs font-sans">Running test cases...</p>
          </div>
        ) : !output ? (
          <div className="h-full flex flex-col items-center justify-center text-base-content/40 gap-1 select-none">
            <TerminalIcon className="size-8 stroke-1" />
            <p className="text-xs font-sans mt-1">Click "Run Code" to execute your solution.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Standard Output */}
            {output.output && (
              <div>
                <p className="text-xs font-semibold text-base-content/60 mb-1 uppercase tracking-wider font-sans">
                  Standard Output:
                </p>
                <pre className="bg-base-200 p-3 rounded-lg text-base-content text-xs whitespace-pre-wrap break-words leading-relaxed border border-base-300">
                  {output.output}
                </pre>
              </div>
            )}

            {/* Error Output */}
            {output.error && (
              <div>
                <p className="text-xs font-semibold text-error mb-1 uppercase tracking-wider font-sans">
                  Error Details:
                </p>
                <pre className="bg-error/10 text-error p-3 rounded-lg text-xs whitespace-pre-wrap break-words border border-error/30 leading-relaxed">
                  {output.error}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;