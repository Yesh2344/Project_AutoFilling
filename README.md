# Smart Autofill Chrome Extension

A lightweight Chrome extension that automatically detects and fills web forms with your saved personal data, similar to Google's built-in autofill but fully customizable. Perfect for streamlining repetitive tasks like filling out forms for job applications, signups, or online shopping.

## Features

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

