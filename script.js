document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to your Node.js-powered website!");
    console.log("JavaScript loaded!");  // ✅ Best placed here
});

alert("Hello from script.js!");

function showMessage() {
    alert("Button was clicked!");
}

function greetUser() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("greeting").textContent = `Hello, ${name}!`;
}

fetch('/api/data')
  .then(res => res.json())
  .then(data => {
    console.log(data.message); // Shows in console
    // Or show on page
   document.getElementById('backendMessage').textContent = data.message;

  })
  .catch(err => console.error('API fetch error:', err));
