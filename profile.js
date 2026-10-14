const currentUserKey = "mgm_current_user";

const userDetails = document.getElementById("userDetails");
const activityStats = document.getElementById("activityStats");
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");
const logoutBtn = document.getElementById("logoutBtn");

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(currentUserKey));
}

const user = getCurrentUser();
if (!user) {
  window.location.href = "index.html";
}

const details = [
  ["Username", user.username],
  ["Full Name", user.fullName],
  ["Email", user.email],
  ["Mobile", user.mobile],
  ["Year", user.year],
  ["Branch", user.branch]
];

userDetails.innerHTML = details
  .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
  .join("");

const medals = user.medals.length ? user.medals.join(", ") : "No medals yet";
const progress = Math.min(100, Math.round((user.solvedQuestions / 100) * 100));

activityStats.innerHTML = `
  <div class="stat"><h3>${user.solvedQuestions}</h3><p>Questions Solved</p></div>
  <div class="stat"><h3>${user.medals.length}</h3><p>Total Medals</p></div>
  <div class="stat"><h3>${medals}</h3><p>Earned Medals</p></div>
`;

progressBar.value = progress;
progressValue.textContent = `${progress}%`;

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem(currentUserKey);
  window.location.href = "index.html";
});
