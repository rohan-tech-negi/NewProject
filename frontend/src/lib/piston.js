// Piston API is a service for code execution
const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
};

/**
 * Execute JavaScript in the browser environment
 */
function executeJavaScriptInBrowser(code) {
  const logs = [];
  const customConsole = {
    log: (...args) => {
      logs.push(
        args
          .map((arg) => {
            if (arg === undefined) return "undefined";
            if (arg === null) return "null";
            if (typeof arg === "object") {
              try {
                return JSON.stringify(arg);
              } catch {
                return String(arg);
              }
            }
            return String(arg);
          })
          .join(" ")
      );
    },
    error: (...args) => {
      logs.push(args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" "));
    },
    warn: (...args) => {
      logs.push(args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" "));
    },
    info: (...args) => {
      logs.push(args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" "));
    },
  };

  try {
    const run = new Function("console", code);
    run(customConsole);
    return {
      success: true,
      output: logs.join("\n") || "Code executed successfully with no output.",
    };
  } catch (error) {
    return {
      success: false,
      output: logs.join("\n"),
      error: error.message || String(error),
    };
  }
}

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  // For JavaScript, execute directly in browser for instant execution and offline support
  if (language === "javascript") {
    return executeJavaScriptInBrowser(code);
  }

  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        files: [
          {
            name: `main.${getFileExtension(language)}`,
            content: code,
          },
        ],
      }),
    });

    if (response.status === 401) {
      return {
        success: false,
        error: `Piston Code Execution API returned 401 (Unauthorized). The public emkc.org Piston endpoint now requires an authorized API key.`,
      };
    }

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    const output = data.run.output || "";
    const stderr = data.run.stderr || "";

    if (stderr) {
      return {
        success: false,
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
  };

  return extensions[language] || "txt";
}