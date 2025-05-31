const GEMINI_API_KEY_STORAGE_KEY = "geminiApiKey";

document.getElementById("saveButton").addEventListener("click", () => {
  const apiKey = document.getElementById("GEMINI_API_KEY_INPUT").value.trim();
  chrome.storage.sync.set({ [GEMINI_API_KEY_STORAGE_KEY]: apiKey }, () => {
    alert("API Key saved successfully!");
    window.close();
  });
});
