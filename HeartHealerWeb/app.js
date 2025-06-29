function goToNextPage(page) {
  window.location.href = page;
}

function saveJournal() {
  const journalText = document.getElementById("journalInput").value;
  if (journalText.trim()) {
    localStorage.setItem("healing_journal", journalText);
    alert("📝 Journal saved just for you!");
  }
}

function saveGratitude() {
  const gratitudeText = document.getElementById("gratitudeInput").value;
  if (gratitudeText.trim()) {
    localStorage.setItem("gratitude_note", gratitudeText);
    alert("🙏 Gratitude saved privately!");
  }
}

function goToNextPage(page) {
  window.location.href = page;
}

const careTips = [
  "Drink a full glass of water 💧",
  "Block him and breathe 😌",
  "Go outside and feel the sun ☀️",
  "Unfollow toxic pages 💻",
  "Write one thing you love about yourself ✍️",
  "Stretch your body for 2 minutes 🧘‍♀️",
  "Put on your favorite lipstick 💄",
  "Message a friend just to smile 📱",
  "Listen to your favorite song 🎧",
  "Take a break from social media 📵",
  "Look in the mirror and say: 'I love you' 💗",
  "Delete old chats that hurt 🗑️",
  "Clean a corner of your room 🧼",
  "Write a future goal and visualize it 🌟",
  "Wear something that makes you feel powerful 👗",
  "Dance like no one's watching 💃",
  "Read a page of a book 📚",
  "Light a scented candle 🕯️",
  "Put your phone down for 30 mins ☁️",
  "Smile at yourself — you made it today 💪"
];

function showRandomTip() {
  const tipBox = document.getElementById("selfCareTip");
  const randomTip = careTips[Math.floor(Math.random() * careTips.length)];
  tipBox.innerText = randomTip;
}


function saveJournal() {
  const entry = document.getElementById("journalInput").value.trim();
  if (entry) {
    localStorage.setItem("heartJournal", entry);
    loadSavedNotes();
    alert("Journal saved 💗");
  }
}

function saveGratitude() {
  const entry = document.getElementById("gratitudeInput").value.trim();
  if (entry) {
    localStorage.setItem("heartGratitude", entry);
    loadSavedNotes();
    alert("Gratitude saved 🙏");
  }
}

function loadSavedNotes() {
  const journal = localStorage.getItem("heartJournal") || "None";
  const gratitude = localStorage.getItem("heartGratitude") || "None";

  const savedJournal = document.getElementById("savedJournal");
  const savedGratitude = document.getElementById("savedGratitude");

  if (savedJournal && savedGratitude) {
    savedJournal.innerText = journal;
    savedGratitude.innerText = gratitude;
  }
}

// Auto-load saved notes when journal page is opened
if (window.location.pathname.includes("page3.html")) {
  window.onload = loadSavedNotes;
}
// Motivational Quotes (20+)
const girlQuotes = [
  "You are enough just as you are.",
  "A queen doesn't need a king to rule.",
  "Fall in love with yourself first.",
  "He left, but your glow stayed.",
  "You are not a backup plan. You are the whole damn story.",
  "Your heart is a garden, not a battlefield.",
  "Strong women rise from broken pieces.",
  "Self-worth isn’t found in someone else’s validation.",
  "Don’t cry for him, smile for you.",
  "Confidence is the best revenge.",
  "You heal, you grow, you glow.",
  "Slay your pain with style 💅",
  "You're the author of your happy ending.",
  "Broken crayons still color beautifully.",
  "He lost a diamond. You just dropped a pebble.",
  "Heartbreak is a plot twist, not the end.",
  "You’re magic, not made to be tamed.",
  "Stop chasing. Start choosing.",
  "One day you’ll thank the goodbye.",
  "The best comeback is living well."
];

let quoteIndex = 0;
function nextMotivation() {
  const quoteBox = document.getElementById("quoteText");
  quoteBox.innerText = girlQuotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % girlQuotes.length;
}

// Strong Women Stories
const girlStories = [
  "✨ Riya was dumped right before her graduation. Instead of falling apart, she started a YouTube channel about student wellness — today she’s a paid speaker and advocate for mental health.",
  "🌟 After Priya’s 4-year relationship ended, she traveled solo, learned to code, and now works at a tech startup. Her favorite quote? 'He left, so I could find myself.'"
];

let storyIndex = 0;
function nextStory() {
  const storyBox = document.getElementById("storyText");
  storyBox.innerText = girlStories[storyIndex];
  storyIndex = (storyIndex + 1) % girlStories.length;
}
function breakHeart() {
  const heart = document.getElementById("heart");
  const message = document.getElementById("message");

  heart.innerText = "💔";
  heart.style.animation = "none"; // stop pulse
  heart.style.transform = "scale(1.1)";
  message.innerText = "It’s okay to let go. You're one step closer to healing 💖";
}
const hairStyles = ["💇‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🎤"];
const makeups = ["😊", "😘", "😍", "😎", "💋"];
const outfits = ["👗", "🕶️👚", "👠👘", "👜👖", "👒👔"];

let hairIndex = 0, makeupIndex = 0, outfitIndex = 0;

function nextHair() {
  hairIndex = (hairIndex + 1) % hairStyles.length;
  document.getElementById("hair").innerText = hairStyles[hairIndex];
  showGlowMessage();
}

function nextMakeup() {
  makeupIndex = (makeupIndex + 1) % makeups.length;
  document.getElementById("face").innerText = makeups[makeupIndex];
  showGlowMessage();
}

function nextOutfit() {
  outfitIndex = (outfitIndex + 1) % outfits.length;
  document.getElementById("outfit").innerText = outfits[outfitIndex];
  showGlowMessage();
}

function showGlowMessage() {
  const messages = [
    "Glow girl, glow! 💅",
    "Serving looks and healing vibes ✨",
    "You're fire 🔥",
    "Who needs him? You got style 💃",
    "This is your era. Own it 👑"
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("glowMessage").innerText = message;
}
const careTips = [
  "Drink a full glass of water 💧",
  "Block him and breathe 😌",
  "Go outside and feel the sun ☀️",
  "Unfollow toxic pages 💻",
  "Write one thing you love about yourself ✍️",
  "Stretch your body for 2 minutes 🧘‍♀️",
  "Put on your favorite lipstick 💄",
  "Message a friend just to smile 📱",
  "Listen to your favorite song 🎧",
  "Take a break from social media 📵",
  "Look in the mirror and say: 'I love you' 💗",
  "Delete old chats that hurt 🗑️",
  "Clean a corner of your room 🧼",
  "Write a future goal and visualize it 🌟",
  "Wear something that makes you feel powerful 👗",
  "Dance like no one's watching 💃",
  "Read a page of a book 📚",
  "Light a scented candle 🕯️",
  "Put your phone down for 30 mins ☁️",
  "Smile at yourself — you made it today 💪"
];

function showRandomTip() {
  const tipBox = document.getElementById("selfCareTip");
  const randomTip = careTips[Math.floor(Math.random() * careTips.length)];
  tipBox.innerText = randomTip;
}
const botReplies = [
  "That sounds really hard. I’m proud of you for sharing ❤️",
  "You deserve to be loved gently and without confusion 💖",
  "Take a deep breath. I’m here for you 🌸",
  "You are not alone. You’re doing better than you think 💪",
  "Your feelings are valid. Cry if you need to 💧",
  "You’ve got this. One moment at a time ⏳",
  "Hearts heal. Yours is already trying 💗",
  "You’re enough, always 🌈",
  "Let it out. That’s how we heal 🕊️",
  "Even pain has a purpose. You’ll grow from this 🌱"
];

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.trim();
  if (!userText) return;

  // Create and display user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Bot reply after delay
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
    botMsg.innerText = reply;
    chatBox.appendChild(botMsg);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);
}
function restartJourney() {
  // Optional: clear any saved data
  // localStorage.clear(); // uncomment if you want to reset everything

  // Restart from Page 1
  window.location.href = "page1.html";
}
