// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    // Get stored user data
    chrome.storage.sync.get(["name", "email", "phone", "address"], (data) => {
      const inputs = document.querySelectorAll("input, textarea");
  
      inputs.forEach((input) => {
        const fieldName = (input.name || input.id || "").toLowerCase();
  
        // Match and fill fields based on common naming conventions
        if (fieldName.includes("name") || fieldName.includes("fullname")) {
          input.value = data.name || "";
        }
        else if (fieldName.includes("email")) {
          input.value = data.email || "";
        }
        else if (fieldName.includes("phone") || fieldName.includes("tel")) {
          input.value = data.phone || "";
        }
        else if (fieldName.includes("address") || fieldName.includes("street")) {
          input.value = data.address || "";
        }
      });
    });
  });
  
  // Optional: Listen for dynamic form changes (e.g., single-page apps)
  const observer = new MutationObserver(() => {
    chrome.storage.sync.get(["name", "email", "phone", "address"], (data) => {
      const inputs = document.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        const fieldName = (input.name || input.id || "").toLowerCase();
        if (!input.value) { // Only fill if empty
          if (fieldName.includes("name") || fieldName.includes("fullname")) {
            input.value = data.name || "";
          }
          else if (fieldName.includes("email")) {
            input.value = data.email || "";
          }
          else if (fieldName.includes("phone") || fieldName.includes("tel")) {
            input.value = data.phone || "";
          }
          else if (fieldName.includes("address") || fieldName.includes("street")) {
            input.value = data.address || "";
          }
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });