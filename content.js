console.log("Popup script loaded");

const getProblemText = () => {
  const contentElement = document.querySelector(
    '[data-track-load="description_content"]'
  );
  const contentText = contentElement?.innerText || "";
  return contentText;
};

const getCode = () => {
  const codeElement = document.querySelector(
    '[data-track-load="code_editor"]'
  );
  const codeText = codeElement?.innerText || "";
  return codeText;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GET_PROBLEM_TEXT") {
        console.log("Received request to get problem text");
        const problemText = getProblemText();
        sendResponse({ text: problemText });
    } else if (request.type === "GET_PROBLEM_AND_CODE") {
        console.log("Received request to get problem text and code");
        const problemText = getProblemText();
        const code = getCode();
        sendResponse({ problem: problemText, code });
    } else {
        sendResponse({ error: "Unknown action" });
    }
    return true; // Keep the message channel open for sendResponse
});
