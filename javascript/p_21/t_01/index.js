const validUserIds = new Map([
  ["Romuś", "12345678"],
  ["Stasio", "11111111"],
  ["Barti", "12341234"],
  ["Krzyś", "43214321"],
]);

const voteCounts = new Map();

voteCounts.set("option-1", 0);
voteCounts.set("option-2", 0);
voteCounts.set("option-3", 0);
// Userzy którzy już zagłosowali;
const votedUsers = new Set();

const voitingForm = document.querySelector(".voiting-form");
const voteOptions = document.querySelector(".vote-options");
const userName = document.querySelector(".user-name");
const userId = document.querySelector(".user-id");
const resultDiv = document.querySelector(".vote-results");
const voiting = (e) => {
  e.preventDefault();
  console.log("głosowanie");
  const user = userName.value;
  const id = userId.value;
  const select = voteOptions.value;
  if (validUserIds.get(user) === id + "") {
    if (votedUsers.has(user)) {
      alert("Już głosowałeś.");
    } else {
      // Logika ważnego głosu.

      votedUsers.add(user);
      voteCounts.set(select, voteCounts.get(select) + 1);
    }
  } else {
    alert("Nie mamy Cię na liście.");
  }
  updateResults();
};
const updateResults = () => {
  let output = "<div><h3>Wynik</h3><ul>";
  for (const [option, count] of voteCounts) {
    output += `<li>${option}: ${count} głosów.</li>`;
  }

  resultDiv.innerHTML = output + "</ul></div>";
};

voitingForm.addEventListener("submit", voiting);
