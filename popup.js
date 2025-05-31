const GEMINI_API_KEY_STORAGE_KEY = "geminiApiKey";

const actionsSelect = document.getElementById("actions");

document.getElementById("generate_summary").addEventListener("click", () => {
  const explanationViewer = document.getElementById("explanation_viewer");
  explanationViewer.textContent = "Generating explanation...";

  chrome.tabs.query({ active: true, currentWindow: true }, ([tabs]) => {
    const activeTab = tabs;
    console.log("Active tab url:", activeTab.url);
    if (activeTab) {
      chrome.tabs.sendMessage(
        activeTab.id,
        { type: "GET_PROBLEM_AND_CODE" },
        async (response) => {
          if (response && response.problem) {
            const action = actionsSelect.value;
            const generatedHTML = await getGeminiResponse(
              action,
              response.problem,
              response.code
            );
            explanationViewer.innerHTML = generatedHTML;
          } else {
            explanationViewer.textContent = "Failed to retrieve problem text.";
          }
        }
      );
    } else {
      explanationViewer.textContent = "No active tab found.";
    }
  });
});

const getPrompt = (action, problemText, code) => {
  const promptGallery = {
    explanation: {
      prompt: `Explain this LeetCode problem clearly and briefly like I'm new to DSA. Use 3 bullet points: 1. What's the problem asking? 2. What are the inputs and expected outputs? 3. What are the key constraints or rules to remember? Don't solve it, just help me quickly understand the task.`,
      requireCode: false,
    },
    approach: {
      prompt: `I'm trying to solve this problem and I want to understand how to approach it. Don't give me the solution or code just walk me through the thought process, possible algorithms or data structures that could help, and how I might break the problem down step-by-step.`,
      requireCode: false,
    },
    review: {
      prompt: `Here's a LeetCode problem followed by the code I wrote to solve it. Can you review the code and tell me: What part of the problem my code handles correctly, What part it's missing or doing wrong (with reasoning), Any edge cases I might be missing, Suggestions to improve it (without rewriting the whole solution).`,
      requireCode: true,
    },
  };

  if (promptGallery[action]) {
    return `${promptGallery[action].prompt} Problem: ${problemText} ${
      promptGallery[action].requireCode ? `My code: ${code}` : ""
    }`;
  }
};

async function getGeminiResponse(action, problemText, code) {
  const { [GEMINI_API_KEY_STORAGE_KEY]: apiKey } =
    await chrome.storage.sync.get([GEMINI_API_KEY_STORAGE_KEY]);

  if (!apiKey) {
    console.error("API key not found. Please set it in the options.");
    return "API key not set.";
  }

  try {
    const prompt = getPrompt(action, problemText, code);
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    const parsedText = marked.parse(generatedText);
    console.log("Parsed Text:", parsedText);
    return parsedText || "No explanation generated.";
  } catch (error) {
    console.error("Error:", error);
    return "Error occurred while fetching explanation.";
  }
}
