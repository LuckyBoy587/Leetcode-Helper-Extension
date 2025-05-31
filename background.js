const GEMINI_API_KEY_STORAGE_KEY = "geminiApiKey";
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get([GEMINI_API_KEY_STORAGE_KEY], (result) => {
        if (!result[GEMINI_API_KEY_STORAGE_KEY]) {
            chrome.tabs.create({url: "options.html"});
        }
    });
})