function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

(function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
})();

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.onsubmit = function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username.length < 3) return alert("Username is too short!");
    if (password.length < 6) return alert("Password must be 6+ characters!");
    if (localStorage.getItem(email)) return alert("Email already exists!");

    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "login.html";
  };
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.onsubmit = function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const data = localStorage.getItem(email);
    if (!data) return alert("User not found!");

    const user = JSON.parse(data);
    if (user.password !== password) return alert("Wrong password!");
    alert(`Welcome back, ${user.username}!`);
    window.location.href = "Home.html";
  };
}
