// Change Theme
function setTheme(theme) {
    document.body.className = 'theme-' + theme;
  }
  
  // Add/Delete Animal
  function addAnimal() {
    let input = document.getElementById("animal-name");
    let name = input.value.trim();
    if (name === "") {
      alert("Write animal name!");
      return;
    }
    let list = document.getElementById("animal-list");
    let item = document.createElement("li");
    item.innerHTML = name + ' <button onclick="deleteAnimal(this)">Delete</button>';
    list.appendChild(item);
    input.value = "";
  }
  
  function deleteAnimal(btn) {
    btn.parentElement.remove();
  }
  
  // Show/Hide Extra Box
  function toggleBox() {
    let box = document.getElementById("extra-box");
    box.classList.toggle("hidden");
  }
  
  // Login / Logout
  function login() {
    let name = document.getElementById("username").value.trim();
    if (name === "") {
      alert("Write your name!");
      return;
    }
    localStorage.setItem("user", name);
    updateUI();
  }
  
  function logout() {
    localStorage.removeItem("user");
    updateUI();
  }
  
  function updateUI() {
    let user = localStorage.getItem("user");
    let loginBox = document.getElementById("login-box");
    let logoutBox = document.getElementById("logout-box");
    let settings = document.getElementById("settings");
    let welcomeText = document.getElementById("welcome-text");
  
    if (user) {
      loginBox.classList.add("hidden");
      logoutBox.classList.remove("hidden");
      settings.classList.remove("hidden");
      welcomeText.textContent = "Hello, " + user + "!";
    } else {
      loginBox.classList.remove("hidden");
      logoutBox.classList.add("hidden");
      settings.classList.add("hidden");
    }
  }
  
  updateUI(); // Run on page load