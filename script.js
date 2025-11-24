const jobRiskMap = {
  'software engineer': 45,
  'developer': 45,
  'web developer': 50,
  'data entry': 90,
  'graphic designer': 70,
  'teacher': 25,
  'doctor': 15,
  'nurse': 20,
  'artist': 35,
  'writer': 60,
  'copywriter': 75,
  'call center agent': 85,
  'cashier': 80,
  'driver': 70,
  'lawyer': 40,
  'student': 10,
  'engineer': 45
};

const HIGH_RISK_THRESHOLD = 60;

const input = document.getElementById('jobInput');
const btn = document.getElementById('checkBtn');
const resultBox = document.getElementById('resultBox');
const verdictEl = document.getElementById('verdict');
const scoreTextEl = document.getElementById('scoreText');
const riskBar = document.getElementById('riskBar');

btn.addEventListener('click', checkJob);
input.addEventListener('keydown', e => e.key === 'Enter' && checkJob());

function checkJob() {
  const jobRaw = input.value.trim();
  const job = jobRaw.toLowerCase();

  if (!job) {
    verdictEl.textContent = "Type a job.";
    scoreTextEl.textContent = "";
    riskBar.style.width = "0%";
    resultBox.style.display = "block";
    return;
  }

  if (['unemployed', 'jobless', 'no job'].includes(job)) {
    verdictEl.textContent = "AI can’t take a job you don’t have.";
    scoreTextEl.textContent = `AI risk score for "${jobRaw}": 0%`;
    riskBar.style.width = "0%";
    riskBar.style.background = "#2ecc71";
    resultBox.style.display = "block";
    return;
  }

  const memePattern = /(goon|rizz|npc|sigma|skibidi|ohio|gyatt|fanum|mewing|buck|shitpost|based|fanum tax|side eye|sus)/i;

  if (memePattern.test(job)) {
    const roasts = [
      `"${jobRaw}" is not a job, it's a lifestyle crisis.`,
      `Nobody pays for "${jobRaw}".`,
      `AI can't steal a job that doesn't exist.`,
      `"${jobRaw}" is not employment. Touch grass.`,
      `Career: "${jobRaw}" — never been seen on this planet.`
    ];

    verdictEl.textContent = roasts[Math.floor(Math.random() * roasts.length)];
    scoreTextEl.textContent = "AI risk score: 0%";
    riskBar.style.width = "0%";
    riskBar.style.background = "#2ecc71";
    resultBox.style.display = "block";
    return;
  }

  let risk = jobRiskMap[job];

  if (risk === undefined) {
    const hasTechWords = /(tech|engineer|data|cloud|robot|ai|machine|web|code|cyber|software|hardware)/i.test(job);
    const serious = job.length > 5;

    if (hasTechWords) risk = 30 + Math.floor(Math.random() * 20);
    else if (!serious) risk = 60 + Math.floor(Math.random() * 25);
    else risk = 40 + Math.floor(Math.random() * 40);
  }

  const verdict =
    risk >= HIGH_RISK_THRESHOLD
      ? "YES — AI is packing your desk for you."
      : "NO — AI is taking someone else’s job first.";

  verdictEl.textContent = verdict;
  scoreTextEl.textContent = `AI risk score for "${jobRaw}": ${risk}%`;

  riskBar.style.width = risk + "%";
  riskBar.style.background =
    risk < 35 ? "#2ecc71" :
    risk < 70 ? "#f1c40f" :
    "#e74c3c";

  resultBox.style.display = "block";
}

