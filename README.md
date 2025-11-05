# LeetCode Coding Helper Extension

A powerful Chrome extension that enhances your LeetCode problem-solving experience by providing AI-powered assistance through Google's Gemini API.

## 🌟 Features

- **Problem Explanation**: Get clear, beginner-friendly explanations of LeetCode problems
- **Solution Approach**: Receive strategic guidance on how to approach problems without spoiling the solution
- **Code Review**: Get feedback on your code implementation, including correctness analysis and improvement suggestions
- **Seamless Integration**: Works directly on LeetCode problem pages
- **Modern UI**: Clean, dark-themed interface that matches your coding environment
- **Privacy-Focused**: Your API key is stored locally in your browser

## 📋 Prerequisites

- Chrome browser (or any Chromium-based browser like Edge, Brave, etc.)
- A Google Gemini API key (free tier available)

## 🚀 Installation

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key for later use

### Step 2: Install the Extension

#### Option A: Install from Source (Development Mode)

1. Download or clone this repository:
   ```bash
   git clone https://github.com/LuckyBoy587/Leetcode-Helper-Extension.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" using the toggle in the top-right corner

4. Click "Load unpacked" button

5. Select the extension directory (the folder containing `manifest.json`)

6. The extension icon should now appear in your Chrome toolbar

#### Option B: Install from Chrome Web Store

*(Coming soon)*

### Step 3: Configure the Extension

1. Click on the extension icon in your toolbar
2. If this is your first time, you'll be automatically redirected to the options page
3. Enter your Gemini API key in the provided field
4. Click "Save"

## 📖 Usage

1. **Navigate to a LeetCode Problem**
   - Go to any problem page on [leetcode.com](https://leetcode.com/problemset/)

2. **Open the Extension**
   - Click the extension icon in your Chrome toolbar

3. **Choose an Action**
   - **Explain the Question**: Get a clear breakdown of what the problem is asking
   - **Approach to Solve**: Receive strategic guidance on how to solve it
   - **Review my Code**: Get feedback on your solution (make sure you have code in the editor)

4. **Generate Response**
   - Click the "Generate" button
   - Wait for the AI to process your request
   - View the formatted response in the extension popup

## 💡 How It Works

### Available Actions

#### 1. Explain the Question
Perfect for understanding complex problem statements. The AI will provide:
- What the problem is asking in simple terms
- Expected inputs and outputs
- Key constraints and rules to remember

#### 2. Approach to Solve
Get strategic guidance without spoiling the solution:
- Thought process for tackling the problem
- Relevant algorithms and data structures
- Step-by-step breakdown of the approach

#### 3. Review my Code
Submit your solution for constructive feedback:
- What parts of your code are correct
- What's missing or incorrect (with reasoning)
- Edge cases you might have missed
- Suggestions for improvement

## 🛠️ Technical Details

### Built With

- **Manifest V3**: Latest Chrome extension architecture
- **Google Gemini API**: AI-powered assistance using Gemini 2.0 Flash model
- **Markdown Rendering**: Formatted, readable responses
- **Chrome Storage API**: Secure local storage for API keys

### File Structure

```
Leetcode-Helper-Extension/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup interface
├── popup.js              # Popup logic and API integration
├── content.js            # Content script for LeetCode pages
├── background.js         # Background service worker
├── options.html          # Settings page
├── options.js            # Settings logic
├── text-parser.js        # marked.js library (Markdown parser)
├── icon.png              # Extension icon
└── README.md             # This file
```

### Permissions

The extension requires the following permissions:
- `activeTab`: To interact with the current LeetCode problem page
- `scripting`: To extract problem text and code
- `storage`: To securely store your API key locally
- `host_permissions`: Limited to leetcode.com domain

## 🔒 Privacy & Security

- Your API key is stored securely using Chrome's sync storage (synced across your Chrome browsers when signed in)
- No data is sent to any third-party servers except Google's Gemini API
- The extension only activates on LeetCode problem pages
- All communication with Gemini API is done over HTTPS

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Ideas for Contribution

- Add support for more AI models (OpenAI, Claude, etc.)
- Implement caching for repeated questions
- Add syntax highlighting for code snippets
- Create unit tests
- Improve error handling
- Add internationalization (i18n) support

## 🐛 Troubleshooting

### Extension not working on LeetCode

- Make sure you're on a problem page (URL: `https://leetcode.com/problems/*`)
- Refresh the page after installing the extension
- Check if the extension is enabled in `chrome://extensions/`

### "API key not set" error

- Click the extension icon and check if you're prompted for an API key
- Go to the extension's options page and enter your Gemini API key
- Make sure you've copied the complete API key without extra spaces

### No response or error messages

- Verify your API key is valid at [Google AI Studio](https://aistudio.google.com/apikey)
- Check your internet connection
- Open browser console (F12) and check for any error messages
- Ensure you haven't exceeded Gemini API rate limits

### Code review not working

- Make sure you have code written in the LeetCode editor
- The code editor must be visible on the page
- Try refreshing the page and try again

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by [LuckyBoy587](https://github.com/LuckyBoy587)

## 🙏 Acknowledgments

- Thanks to Google for providing the Gemini API
- Thanks to LeetCode for the amazing platform
- Thanks to all contributors and users

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/LuckyBoy587/Leetcode-Helper-Extension/issues)
- Check existing issues for solutions
- Provide detailed information about your problem (browser version, error messages, etc.)

---

**Happy Coding! 🚀**

*If you find this extension helpful, please consider giving it a ⭐ on GitHub!*
