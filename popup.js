// Load saved data when popup opens
document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["name", "email", "phone", "address"], (data) => {
      document.getElementById("name").value = data.name || "";
      document.getElementById("email").value = data.email || "";
      document.getElementById("phone").value = data.phone || "";
      document.getElementById("address").value = data.address || "";
    });
  });
  
  // Save data when form is submitted
  document.getElementById("userDataForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing
    const userData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value
    };
  
    chrome.storage.sync.set(userData, () => {
      document.getElementById("status").textContent = "Data saved successfully!";
      setTimeout(() => {
        document.getElementById("status").textContent = "";
      }, 2000); // Clear status message after 2 seconds
    });
  });