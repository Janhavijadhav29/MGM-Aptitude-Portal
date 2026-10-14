const currentUserKey = "mgm_current_user";
const usersKey = "mgm_users";

const subjects = [
  {
    name: "Quantitative Aptitude",
    topics: [
      {
        title: "Percentage Basics and Shortcuts",
        concept: "Percentage means per hundred. Convert fraction/decimal to percentage to compare values quickly.",
        formula: "Percentage = (Part / Whole) x 100",
        example: "If 45 out of 60 students passed, pass percentage = (45/60) x 100 = 75%.",
        tips: "For x% of y, use (x/100) x y. Example: 25% of 200 = 50."
      },
      {
        title: "Ratio and Proportion",
        concept: "Ratio compares two quantities. Proportion states two ratios are equal.",
        formula: "If a:b = c:d, then a x d = b x c",
        example: "If A:B = 2:3 and A = 20, multiply by 10, so B = 30.",
        tips: "Always reduce ratio to simplest form before solving."
      },
      {
        title: "Profit, Loss, and Discount",
        concept: "Compare Cost Price (CP) and Selling Price (SP) to find profit/loss.",
        formula: "Profit% = ((SP-CP)/CP) x 100, Loss% = ((CP-SP)/CP) x 100",
        example: "CP=100 and SP=120, profit = 20, profit% = 20%.",
        tips: "Discount = Marked Price - Selling Price."
      },
      {
        title: "Time, Speed, and Distance",
        concept: "These three are directly related and frequently asked in placement tests.",
        formula: "Speed = Distance/Time, Distance = Speed x Time",
        example: "If speed=60 km/h and time=2 h, distance=120 km.",
        tips: "For m/s to km/h multiply by 18/5."
      }
    ],
    questions: []
  },
  {
    name: "Logical Reasoning",
    topics: [
      {
        title: "Series and Pattern Recognition",
        concept: "Observe difference, multiplication, and alternate terms in number/letter series.",
        formula: "Common checks: +n, x2, squares, primes, alternate positions",
        example: "2, 4, 8, 16, ? follows multiplication by 2, so next is 32.",
        tips: "Check odd and even positions separately if pattern looks mixed."
      },
      {
        title: "Blood Relations",
        concept: "Identify relation using family tree logic based on given statements.",
        formula: "Use symbols: M (male), F (female), P (parent), S (sibling)",
        example: "A is B's mother and B is C's brother -> A is C's mother.",
        tips: "Draw a quick tree diagram to avoid confusion."
      },
      {
        title: "Direction Sense",
        concept: "Track movement and turns to determine final direction and distance.",
        formula: "Right turn = +90 deg, Left turn = -90 deg (clockwise reference)",
        example: "Facing North, right turn -> East; opposite of North-East is South-West.",
        tips: "Use compass points N, E, S, W on rough paper."
      },
      {
        title: "Coding and Decoding",
        concept: "Letters/numbers are shifted or mapped using a specific logic.",
        formula: "Typical shift pattern: New letter position = Old + 1 or +2",
        example: "CAT -> DBU means each letter shifted by +1; DOG -> EPH.",
        tips: "First detect if shift is fixed, alternating, or reverse."
      }
    ],
    questions: []
  },
  {
    name: "Verbal Ability",
    topics: [
      {
        title: "Reading Comprehension Strategy",
        concept: "Read passage for main idea first, then answer detail-based questions.",
        formula: "Skim -> Identify tone/theme -> Locate answer line",
        example: "If question asks author's view, focus on concluding lines and opinion words.",
        tips: "Do not assume facts not written in the passage."
      },
      {
        title: "Grammar Error Spotting",
        concept: "Check subject-verb agreement, tense, and article/preposition usage.",
        formula: "Singular subject -> singular verb, plural subject -> plural verb",
        example: "He goes to college is correct; He go to college is incorrect.",
        tips: "Read sentence slowly and check verb form first."
      },
      {
        title: "Synonyms and Antonyms",
        concept: "Synonym means similar word, antonym means opposite word.",
        formula: "Vocabulary recall through roots and context clues",
        example: "Rapid -> Fast (synonym), Expand -> Contract (antonym).",
        tips: "Practice daily word lists to improve score quickly."
      },
      {
        title: "Sentence Improvement",
        concept: "Pick the option that makes sentence grammatically correct and meaningful.",
        formula: "Check grammar + clarity + tense consistency",
        example: "He has been studying since morning is more accurate than broken tense forms.",
        tips: "Eliminate options with obvious grammar mistakes first."
      }
    ],
    questions: []
  }
];

function addQuestion(list, q, ans, wrongOptions) {
  const options = [String(ans), ...wrongOptions.map(String)];
  const shuffled = options.sort(() => Math.random() - 0.5);
  list.push({ q, options: shuffled, ans: String(ans) });
}

function generateQuantQuestions() {
  const questions = [];

  for (let i = 1; i <= 50; i += 1) {
    const percent = 5 + (i % 10) * 5;
    const base = 80 + i * 4;
    const ans = Math.round((percent * base) / 100);
    addQuestion(
      questions,
      `${percent}% of ${base} is?`,
      ans,
      [ans + 5, ans - 4, ans + 10]
    );
  }

  for (let i = 1; i <= 50; i += 1) {
    const a = 2 + (i % 5);
    const b = 3 + (i % 7);
    const aValue = a * (5 + (i % 9));
    const ans = (aValue / a) * b;
    addQuestion(
      questions,
      `If A:B = ${a}:${b} and A = ${aValue}, then B = ?`,
      ans,
      [ans + b, ans - a, ans + a]
    );
  }

  for (let i = 1; i <= 50; i += 1) {
    const cp = 100 + i * 3;
    const profitPercent = 5 + (i % 16);
    const sp = Math.round(cp * (1 + profitPercent / 100));
    addQuestion(
      questions,
      `If CP = ${cp} and SP = ${sp}, profit percentage is?`,
      `${profitPercent}%`,
      [`${profitPercent + 2}%`, `${Math.max(1, profitPercent - 3)}%`, `${profitPercent + 5}%`]
    );
  }

  for (let i = 1; i <= 50; i += 1) {
    const speed = 30 + (i % 8) * 10;
    const time = 1 + (i % 5);
    const ans = speed * time;
    addQuestion(
      questions,
      `At ${speed} km/h for ${time} hours, distance covered is?`,
      `${ans} km`,
      [`${ans + speed} km`, `${ans - speed} km`, `${ans + 20} km`]
    );
  }

  return questions.slice(0, 200);
}

function generateLogicalQuestions() {
  const questions = [];

  for (let i = 1; i <= 50; i += 1) {
    const first = 2 + i;
    const diff = 2 + (i % 6);
    const second = first + diff;
    const third = second + diff;
    const fourth = third + diff;
    const ans = fourth + diff;
    addQuestion(
      questions,
      `Find the next number: ${first}, ${second}, ${third}, ${fourth}, ?`,
      ans,
      [ans + 1, ans - 2, ans + 3]
    );
  }

  const directions = ["North", "East", "South", "West"];
  for (let i = 0; i < 50; i += 1) {
    const start = directions[i % 4];
    const opposite = directions[(i + 2) % 4];
    addQuestion(
      questions,
      `If a person starts facing ${start}, then opposite direction is?`,
      opposite,
      [directions[(i + 1) % 4], directions[(i + 3) % 4], start]
    );
  }

  for (let i = 1; i <= 50; i += 1) {
    const word = `CODE${i}`;
    const ans = `DPEF${i}`;
    addQuestion(
      questions,
      `If each letter shifts by +1, then ${word} becomes?`,
      ans,
      [`CNDD${i}`, `EPEG${i}`, `BODF${i}`]
    );
  }

  for (let i = 1; i <= 50; i += 1) {
    const gender = i % 2 === 0 ? "father" : "mother";
    const ans = gender === "father" ? "son" : "daughter";
    addQuestion(
      questions,
      `A is the ${gender} of B. B is the ${gender === "father" ? "father" : "mother"} of C. A is C's?`,
      `${gender === "father" ? "grandfather" : "grandmother"}`,
      [ans, "brother", "sister"]
    );
  }

  return questions.slice(0, 200);
}

function generateVerbalQuestions() {
  const questions = [];

  const synonyms = [
    ["Rapid", "Fast", "Slow", "Lazy", "Late"],
    ["Brave", "Courageous", "Fearful", "Weak", "Dull"],
    ["Calm", "Quiet", "Noisy", "Harsh", "Rough"],
    ["Begin", "Start", "Stop", "Close", "End"],
    ["Small", "Tiny", "Huge", "Wide", "Long"]
  ];

  const antonyms = [
    ["Expand", "Contract", "Grow", "Increase", "Stretch"],
    ["Accept", "Reject", "Allow", "Permit", "Take"],
    ["Ancient", "Modern", "Old", "Historic", "Aged"],
    ["Victory", "Defeat", "Win", "Success", "Gain"],
    ["Advance", "Retreat", "Progress", "Forward", "Improve"]
  ];

  const grammarSet = [
    ["He go to class daily.", "He goes to class daily."],
    ["They is ready for exam.", "They are ready for exam."],
    ["She have completed work.", "She has completed work."],
    ["I has a notebook.", "I have a notebook."],
    ["The boys was playing.", "The boys were playing."]
  ];

  const improveSet = [
    ["She do not likes tea.", "She does not like tea."],
    ["He have been here yesterday.", "He was here yesterday."],
    ["I am knowing the answer.", "I know the answer."],
    ["They has finished the task.", "They have finished the task."],
    ["Ravi and me went there.", "Ravi and I went there."]
  ];

  for (let i = 0; i < 50; i += 1) {
    const [word, ans, w1, w2, w3] = synonyms[i % synonyms.length];
    addQuestion(questions, `Choose synonym of '${word}'.`, ans, [w1, w2, w3]);
  }

  for (let i = 0; i < 50; i += 1) {
    const [word, ans, w1, w2, w3] = antonyms[i % antonyms.length];
    addQuestion(questions, `Choose antonym of '${word}'.`, ans, [w1, w2, w3]);
  }

  for (let i = 0; i < 50; i += 1) {
    const [wrong, correct] = grammarSet[i % grammarSet.length];
    addQuestion(
      questions,
      "Choose the grammatically correct sentence.",
      correct,
      [wrong, "He are going to college.", "We was happy."]
    );
  }

  for (let i = 0; i < 50; i += 1) {
    const [wrong, correct] = improveSet[i % improveSet.length];
    addQuestion(
      questions,
      `Improve this sentence: "${wrong}"`,
      correct,
      [wrong, "No improvement needed.", "Sentence is incorrect."]
    );
  }

  return questions.slice(0, 200);
}

subjects[0].questions = generateQuantQuestions();
subjects[1].questions = generateLogicalQuestions();
subjects[2].questions = generateVerbalQuestions();

const subjectList = document.getElementById("subjectList");
const notesSection = document.getElementById("notesSection");
const subjectTitle = document.getElementById("subjectTitle");
const topicNotes = document.getElementById("topicNotes");
const startPracticeBtn = document.getElementById("startPracticeBtn");
const practiceSection = document.getElementById("practiceSection");
const questionCard = document.getElementById("questionCard");
const practiceMsg = document.getElementById("practiceMsg");
const logoutBtn = document.getElementById("logoutBtn");

let selectedSubject = null;
let questionIndex = 0;

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(currentUserKey));
}

function saveCurrentUser(user) {
  localStorage.setItem(currentUserKey, JSON.stringify(user));
}

function saveUserToUsersList(updatedUser) {
  const users = JSON.parse(localStorage.getItem(usersKey) || "[]");
  const next = users.map((u) => (u.email === updatedUser.email ? updatedUser : u));
  localStorage.setItem(usersKey, JSON.stringify(next));
}

function medalForSolved(solved) {
  if (solved >= 100) return "Gold";
  if (solved >= 75) return "Silver";
  if (solved >= 50) return "Bronze";
  return null;
}

const currentUser = getCurrentUser();
if (!currentUser) {
  window.location.href = "index.html";
}

subjects.forEach((subject, idx) => {
  const btn = document.createElement("button");
  btn.className = "subject-btn";
  btn.textContent = subject.name;
  btn.addEventListener("click", () => openSubject(idx));
  subjectList.appendChild(btn);
});

function openSubject(index) {
  selectedSubject = subjects[index];
  questionIndex = 0;
  subjectTitle.textContent = selectedSubject.name;
  topicNotes.innerHTML = "";

  selectedSubject.topics.forEach((topic, i) => {
    const note = document.createElement("article");
    note.className = "note-card";
    note.innerHTML = `
      <h4>Chapter ${i + 1}: ${topic.title}</h4>
      <p><strong>Concept:</strong> ${topic.concept}</p>
      <p><strong>Formula / Rule:</strong> ${topic.formula}</p>
      <p><strong>Example:</strong> ${topic.example}</p>
      <p><strong>Shortcut Tip:</strong> ${topic.tips}</p>
    `;
    topicNotes.appendChild(note);
  });

  notesSection.classList.remove("hidden");
  startPracticeBtn.classList.remove("hidden");
  practiceSection.classList.add("hidden");
}

startPracticeBtn.addEventListener("click", () => {
  practiceSection.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const data = selectedSubject.questions[questionIndex];
  if (!data) {
    practiceMsg.textContent = "Practice complete for this subject.";
    practiceMsg.className = "msg success";
    questionCard.innerHTML = "";
    return;
  }

  const options = data.options
    .map((opt) => `<button class="option-btn" data-option="${opt}">${opt}</button>`)
    .join("");

  questionCard.innerHTML = `
    <h3>Q${questionIndex + 1}: ${data.q}</h3>
    <div class="options-wrap">${options}</div>
  `;

  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => checkAnswer(btn.dataset.option));
  });
}

function checkAnswer(selected) {
  const data = selectedSubject.questions[questionIndex];
  if (selected === data.ans) {
    currentUser.solvedQuestions += 1;
    const medal = medalForSolved(currentUser.solvedQuestions);
    if (medal && !currentUser.medals.includes(medal)) {
      currentUser.medals.push(medal);
      practiceMsg.textContent = `Correct! You unlocked ${medal} Medal!`;
    } else {
      practiceMsg.textContent = "Correct answer!";
    }
    practiceMsg.className = "msg success";
  } else {
    practiceMsg.textContent = `Wrong! Correct answer is: ${data.ans}`;
    practiceMsg.className = "msg error";
  }

  saveCurrentUser(currentUser);
  saveUserToUsersList(currentUser);
  questionIndex += 1;
  setTimeout(showQuestion, 500);
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem(currentUserKey);
  window.location.href = "index.html";
});
