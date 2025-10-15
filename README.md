# Smart Autofill Chrome Extension

A lightweight Chrome extension that automatically detects and fills web forms with your saved personal data, similar to Google's built-in autofill but fully customizable. Perfect for streamlining repetitive tasks like filling out forms for job applications, signups, or online shopping.


* **Form Detection**: Automatically identifies input fields on any webpage.
* **Custom Data**: Save your name, email, phone, and address via a simple popup.
* **Persistent Storage**: Uses Chrome's storage.sync to keep your data across sessions.
* **Dynamic Support**: Handles dynamically loaded forms (e.g., single-page apps) with a MutationObserver.
* **Simple Matching**: Fills fields based on common naming conventions (e.g., "email", "name").

## Installation

### Prerequisites

* Google Chrome browser (or a Chromium-based browser).
* Basic familiarity with Chrome extensions (no advanced coding required to install).

### Steps

1. **Clone or Download**:
   * Clone this repository: `git clone <repository-url>` or download the ZIP file and extract it.

2. **Load the Extension**:
   * Open Chrome and navigate to `chrome://extensions/`.
   * Enable **Developer mode** (toggle in the top-right corner).
   * Click **Load unpacked** and select the autofill-extension folder.

3. **Verify**:
   * You should see "Smart Autofill" listed among your extensions.

## Usage

1. **Set Up Your Data**:
   * Click the extension icon in your Chrome toolbar to open the popup.
   * Enter your details (name, email, phone, address) in the form.
   * Click **Save Data**. Your info is now stored securely.

2. **Autofill Forms**:
   * Visit any webpage with a form (e.g., a signup page).
   * The extension will automatically detect and fill matching fields.
   * If a field doesn't fill correctly, check its name or id attributes (see "How It Works" below).

3. **Test Sites**:
   * Try it on simple forms like contact pages or more complex ones like job applications.

## How It Works

* **Popup**: Built with HTML/CSS/JavaScript, it lets you input and save data using Chrome's storage.sync API.
* **Content Script**: Runs on every page, scans for `<input>` and `<textarea>` elements, and fills them based on field names/IDs.
* **Matching Logic**: Uses simple keyword checks (e.g., "email" or "phone" in the field's name or id). Case-insensitive.
* **Dynamic Forms**: A MutationObserver watches for new fields added after page load.

## Project Structure

```
autofill-extension/
├── manifest.json     # Extension configuration
├── content.js        # Script to detect and fill forms
├── popup.html        # Popup UI for entering data
├── popup.js          # Logic for saving/loading data
├── popup.css         # Styling for the popup
└── README.md         # This file
```

## Limitations

* **Basic Matching**: Only fills fields with obvious names (e.g., "name", "email"). May miss obscure or custom field names.
* **No Validation**: Doesn't check if the data fits (e.g., phone format).
* **Icons Missing**: You'll need to add `icon16.png`, `icon48.png`, and `icon128.png` to the folder for a polished look.

## Future Enhancements

* **Smarter Matching**: Add a synonym dictionary or lightweight NLP for better field recognition.
* **Toggle Switch**: Include an on/off button in the popup.
* **More Fields**: Expand to support city, zip code, etc.
* **Field Validation**: Ensure data matches expected formats (e.g., email regex).

## Contributing

Feel free to fork this project, submit pull requests, or report issues! Suggestions for improving the matching logic or UI are welcome.

## Troubleshooting

* **Form Not Filling**: Check the field's name or id in the page's HTML (right-click > Inspect). Update `content.js` if needed.
* **Data Not Saving**: Ensure Chrome's sync is enabled and you have storage permissions.
* **Errors**: Open Chrome's console (Ctrl+Shift+J) on a webpage or popup to debug.

## License

This project is open-source. Use it, modify it, share it—enjoy!

## Credits

Built with ❤️ by Yeswanth Soma.

## Contact

Email:yeswanthsoma83@gmail.com
@YeswanthSoma

All Copyrights Reserved
