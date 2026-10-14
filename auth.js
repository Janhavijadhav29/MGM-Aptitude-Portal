const usersKey = "mgm_users";
const currentUserKey = "mgm_current_user";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const registerMsg = document.getElementById("registerMsg");
const loginMsg = document.getElementById("loginMsg");

const emailPattern = /^s\d{2}_[a-z]+_[a-z]+@mgmcen\.ac\.in$/i;
const mobilePattern = /^\d{10}$/;

function getUsers() {
  return JSON.parse(localStorage.getItem(usersKey) || "[]");
}

function saveUsers(users) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerMsg.textContent = "";

  const user = {
    username: document.getElementById("username").value.trim(),
    fullName: document.getElementById("fullName").value.trim(),
    password: document.getElementById("password").value,
    email: document.getElementById("email").value.trim().toLowerCase(),
    mobile: document.getElementById("mobile").value.trim(),
    year: document.getElementById("year").value,
    branch: document.getElementById("branch").value,
    solvedQuestions: 0,
    medals: []
  };

  if (!emailPattern.test(user.email)) {
    registerMsg.textContent = "Email must be in format: s23_surname_name@mgmcen.ac.in";
    registerMsg.className = "msg error";
    return;
  }

  if (!mobilePattern.test(user.mobile)) {
    registerMsg.textContent = "Mobile number must be exactly 10 digits.";
    registerMsg.className = "msg error";
    return;
  }

  const users = getUsers();
  if (users.some((u) => u.email === user.email)) {
    registerMsg.textContent = "This email is already registered.";
    registerMsg.className = "msg error";
    return;
  }

  users.push(user);
  saveUsers(users);

  registerMsg.textContent = "Registration successful. Please login.";
  registerMsg.className = "msg success";
  registerForm.reset();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginMsg.textContent = "";

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  if (!emailPattern.test(email)) {
    loginMsg.textContent = "Only valid MGM college email is allowed.";
    loginMsg.className = "msg error";
    return;
  }

  const users = getUsers();
  const matched = users.find((u) => u.email === email && u.password === password);

  if (!matched) {
    loginMsg.textContent = "Invalid email or password.";
    loginMsg.className = "msg error";
    return;
  }

  localStorage.setItem(currentUserKey, JSON.stringify(matched));
  loginMsg.textContent = "Login successful. Redirecting...";
  loginMsg.className = "msg success";

  setTimeout(() => {
    window.location.href = "subjects.html";
  }, 700);
});
