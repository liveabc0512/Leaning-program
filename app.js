// StackedVocab APP 主邏輯引擎

// App 全域狀態 State
const APP_STATE = {
  identity: "adult", // 預設身分：社會人士日常
  currentDay: 2,     // 1 或 2 (模擬 Day 2 強制複習 Day 1 機制)
  day1Reviewed: false, // Day 1 是否已通過強制複習
  day2Learned: false,  // Day 2 是否完成新單字閱讀
  socialPosted: false, // 社群打卡是否完成
  streak: 7,           // 打卡連勝天數
  
  // 當前卡片進度
  currentWordIndex: 0,
  
  // 遊戲狀態
  gameMode: "missing", // 'missing' 或 'matching'
  gameScore: 0,
  missingGameWordIndex: 0,
  
  // 社群打卡選圖
  selectedPhotoIndex: 0
};

// 初始化 App
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  updateDashboardUI();
  renderCurrentWord();
});

// 事件監聽 Event Listeners Setup
function initEventListeners() {
  // 1. 身分切換
  const identitySelect = document.getElementById("identitySelect");
  if (identitySelect) {
    identitySelect.addEventListener("change", (e) => {
      APP_STATE.identity = e.target.value;
      APP_STATE.currentWordIndex = 0;
      showToast(`已切換身分：${getIdentityLabel(APP_STATE.identity)}`);
      updateDashboardUI();
      renderCurrentWord();
    });
  }

  // 2. 底部導覽列頁面切換 Navigation
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetView = item.getAttribute("data-view");
      switchView(targetView);
    });
  });

  // 3. 打卡相片選擇
  const photoThumbs = document.querySelectorAll(".photo-thumb");
  photoThumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => {
      photoThumbs.forEach(t => t.classList.remove("selected"));
      thumb.classList.add("selected");
      APP_STATE.selectedPhotoIndex = idx;
      const mainPicker = document.getElementById("mainPhotoPicker");
      if (mainPicker) mainPicker.src = SAMPLE_PHOTOS[idx];
    });
  });
}

// 取得當前身分中文標籤
function getIdentityLabel(id) {
  const map = {
    elementary: "國小必備 2000 單",
    junior: "國中必考 2000 單",
    senior: "高中基礎 2000 單",
    college: "大學生常用 2000 單",
    adult: "社會人士日常 2000 單"
  };
  return map[id] || "2000 單字庫";
}

// 切換頁面 View Router
function switchView(viewId) {
  // 檢查【層層堆疊強制複習】規則！
  if (viewId === "learn-view" && APP_STATE.currentDay === 2 && !APP_STATE.day1Reviewed) {
    showToast("⚠️ 請先完成前一天單字強制複習挑戰！");
    switchView("game-view");
    return;
  }

  // 更新頁面 Active
  const sections = document.querySelectorAll(".view-section");
  sections.forEach(sec => sec.classList.remove("active"));
  
  const targetSec = document.getElementById(viewId);
  if (targetSec) targetSec.classList.add("active");

  // 更新 Nav Active
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("data-view") === viewId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 特殊頁面觸發初始化
  if (viewId === "learn-view") {
    renderCurrentWord();
  } else if (viewId === "game-view") {
    initGame();
  } else if (viewId === "social-view") {
    renderSocialWordChips();
  }
}

// 更新首頁 Dashboard UI
function updateDashboardUI() {
  const streakCount = document.getElementById("streakCount");
  if (streakCount) streakCount.textContent = APP_STATE.streak;

  const reviewTask = document.getElementById("taskReview");
  const learnTask = document.getElementById("taskLearn");
  const socialTask = document.getElementById("taskSocial");
  const startBtn = document.getElementById("btnStartToday");

  // 1. 強制複習任務狀態
  if (APP_STATE.day1Reviewed) {
    reviewTask.className = "task-item completed";
    reviewTask.querySelector(".task-status-icon").className = "task-status-icon icon-check";
    reviewTask.querySelector(".task-status-icon").textContent = "✓";
  } else {
    reviewTask.className = "task-item locked";
    reviewTask.querySelector(".task-status-icon").className = "task-status-icon icon-lock";
    reviewTask.querySelector(".task-status-icon").textContent = "🔒";
  }

  // 2. 今日學習任務狀態
  if (APP_STATE.day2Learned) {
    learnTask.className = "task-item completed";
    learnTask.querySelector(".task-status-icon").className = "task-status-icon icon-check";
    learnTask.querySelector(".task-status-icon").textContent = "✓";
  } else {
    learnTask.className = "task-item pending";
  }

  // 3. 社群打卡任務狀態
  if (APP_STATE.socialPosted) {
    socialTask.className = "task-item completed";
    socialTask.querySelector(".task-status-icon").className = "task-status-icon icon-check";
    socialTask.querySelector(".task-status-icon").textContent = "✓";
  }

  // 4. 開始按鈕引導
  if (!APP_STATE.day1Reviewed) {
    startBtn.innerHTML = `🔥 進行前日強制複習測驗 (🔒 解鎖今日)`;
    startBtn.onclick = () => switchView("game-view");
  } else if (!APP_STATE.day2Learned) {
    startBtn.innerHTML = `📚 開始學習今日 10 個新單字`;
    startBtn.onclick = () => switchView("learn-view");
  } else if (!APP_STATE.socialPosted) {
    startBtn.innerHTML = `📸 去社群打卡造句 (+1天記錄)`;
    startBtn.onclick = () => switchView("social-view");
  } else {
    startBtn.innerHTML = `🎉 今日任務已全數達成！`;
    startBtn.onclick = () => showToast("太棒了！明天繼續保持堆疊記憶！");
  }
}

// 取得當前身分的單字清單
function getVocabList() {
  return VOCAB_DATABASE[APP_STATE.identity] || VOCAB_DATABASE["adult"];
}

// 渲染單字學習卡
function renderCurrentWord() {
  const vocabList = getVocabList();
  // 若已通過複習，顯示 Day 2 (索引 10~14)，否則顯示 Day 1 (索引 0~9)
  const startIndex = APP_STATE.day1Reviewed ? 10 : 0;
  const targetIndex = startIndex + (APP_STATE.currentWordIndex % 5);
  const wordObj = vocabList[targetIndex] || vocabList[0];

  const wordBadge = document.getElementById("wordBadge");
  const wordTitle = document.getElementById("wordTitle");
  const wordPhonetic = document.getElementById("wordPhonetic");
  const wordPos = document.getElementById("wordPos");
  const wordTranslation = document.getElementById("wordTranslation");
  const wordSentence = document.getElementById("wordSentence");
  const wordQuote = document.getElementById("wordQuote");
  const cardProgressText = document.getElementById("cardProgressText");

  if (wordBadge) wordBadge.textContent = APP_STATE.day1Reviewed ? "DAY 2 新單字" : "DAY 1 強制複習單字";
  if (wordTitle) wordTitle.textContent = wordObj.word;
  if (wordPhonetic) wordPhonetic.textContent = wordObj.phonetic;
  if (wordPos) wordPos.textContent = wordObj.pos;
  if (wordTranslation) wordTranslation.textContent = wordObj.meaning;
  if (wordSentence) wordSentence.textContent = wordObj.sentence;
  if (wordQuote) wordQuote.textContent = `"${wordObj.quote}"`;

  const totalCard = 5;
  const currentNum = (APP_STATE.currentWordIndex % totalCard) + 1;
  if (cardProgressText) cardProgressText.textContent = `單字卡 ${currentNum} / ${totalCard}`;

  // TTS 發音按鈕綁定
  const ttsBtn = document.getElementById("ttsBtn");
  if (ttsBtn) {
    ttsBtn.onclick = () => speakWord(wordObj.word);
  }
}

// 切換上/下一個單字卡
function prevWordCard() {
  if (APP_STATE.currentWordIndex > 0) {
    APP_STATE.currentWordIndex--;
    renderCurrentWord();
  }
}

function nextWordCard() {
  const maxCard = 4; // 每頁 5 張
  if (APP_STATE.currentWordIndex < maxCard) {
    APP_STATE.currentWordIndex++;
    renderCurrentWord();
  } else {
    // 完成今日閱讀
    APP_STATE.day2Learned = true;
    showToast("🎉 恭喜完成今日 10 個新單字閱讀！前往社群打卡造句！");
    updateDashboardUI();
    switchView("social-view");
  }
}

// 語音發音朗讀 (TTS)
function speakWord(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    showToast("瀏覽器不支援語音播放");
  }
}

/* ================= 遊戲互動區 (Game Engine) ================= */

function initGame() {
  // 自動設置提醒 Banner
  const reviewBanner = document.getElementById("gameReviewBanner");
  if (reviewBanner) {
    if (!APP_STATE.day1Reviewed) {
      reviewBanner.style.display = "flex";
    } else {
      reviewBanner.style.display = "none";
    }
  }

  if (APP_STATE.gameMode === "missing") {
    setupMissingLettersGame();
  } else {
    setupWordMatchingGame();
  }
}

function switchGameMode(mode) {
  APP_STATE.gameMode = mode;
  document.getElementById("btnGameMissing").className = mode === "missing" ? "btn-secondary active" : "btn-secondary";
  document.getElementById("btnGameMatching").className = mode === "matching" ? "btn-secondary active" : "btn-secondary";
  initGame();
}

// 遊戲 1: 尋找遺失字母 (Missing Letters)
function setupMissingLettersGame() {
  const container = document.getElementById("gameContainer");
  const vocabList = getVocabList();
  // 抽出 Day 1 的單字進行複習測驗
  const targetWordObj = vocabList[APP_STATE.missingGameWordIndex % 5] || vocabList[0];
  const fullWord = targetWordObj.word.toUpperCase();
  
  // 決定缺字位置 (選第 2 或第 3 個字母)
  const missingIdx = Math.floor(fullWord.length / 2);
  const correctLetter = fullWord[missingIdx];

  let slotsHtml = "";
  for (let i = 0; i < fullWord.length; i++) {
    if (i === missingIdx) {
      slotsHtml += `<div class="letter-slot empty" id="targetSlot">?</div>`;
    } else {
      slotsHtml += `<div class="letter-slot">${fullWord[i]}</div>`;
    }
  }

  // 生成鍵盤選項 (包含正確字母與干擾字母)
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let keys = [correctLetter];
  while (keys.length < 12) {
    let randChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (!keys.includes(randChar)) keys.push(randChar);
  }
  keys.sort(() => Math.random() - 0.5); // 隨機打亂

  let keyboardHtml = "";
  keys.forEach(k => {
    keyboardHtml += `<button class="key-btn" onclick="checkMissingLetter('${k}', '${correctLetter}')">${k}</button>`;
  });

  container.innerHTML = `
    <div class="game-header">
      <span class="game-title">💡 填補遺失字母 (Day 1 複習題 ${APP_STATE.missingGameWordIndex + 1}/5)</span>
      <span class="game-score">得分: ${APP_STATE.gameScore}</span>
    </div>
    <div style="text-align:center; color: var(--text-muted); font-size: 14px;">
      釋義：<strong style="color:#fff;">${targetWordObj.pos} ${targetWordObj.meaning}</strong>
    </div>
    <div class="missing-word-slots">
      ${slotsHtml}
    </div>
    <div class="keyboard-grid">
      ${keyboardHtml}
    </div>
  `;
}

// 檢查缺字答題
function checkMissingLetter(selected, correct) {
  if (selected === correct) {
    APP_STATE.gameScore += 20;
    showToast("✨ 答對了！過關！");
    APP_STATE.missingGameWordIndex++;
    
    if (APP_STATE.missingGameWordIndex >= 5) {
      // 5 題複習完畢，解鎖 Day 2 強制複習狀態！
      APP_STATE.day1Reviewed = true;
      showToast("🔓 恭喜通過 Day 1 強制複習！今日 10 個新單字已成功解鎖！");
      updateDashboardUI();
      setTimeout(() => switchView("learn-view"), 1200);
    } else {
      setTimeout(() => setupMissingLettersGame(), 600);
    }
  } else {
    showToast("❌ 再試試看！思考一下單字的拼寫喔！");
  }
}

// 遊戲 2: 單字消消樂 (Word Matching)
function setupWordMatchingGame() {
  const container = document.getElementById("gameContainer");
  const vocabList = getVocabList().slice(0, 4); // 4 個單字
  
  let cards = [];
  vocabList.forEach(item => {
    cards.push({ id: item.id, text: item.word, type: "en" });
    cards.push({ id: item.id, text: item.meaning, type: "zh" });
  });

  // 洗牌 Shuffle
  cards.sort(() => Math.random() - 0.5);

  let gridHtml = "";
  cards.forEach((c, idx) => {
    gridHtml += `<div class="match-card" id="match-${idx}" onclick="handleMatchClick(${idx}, '${c.id}')">${c.text}</div>`;
  });

  container.innerHTML = `
    <div class="game-header">
      <span class="game-title">🧩 單字消消樂 (經典連線配對)</span>
      <span class="game-score">得分: ${APP_STATE.gameScore}</span>
    </div>
    <div style="text-align:center; color: var(--text-muted); font-size: 12px; margin-bottom: 8px;">
      點擊英文單字與對應中文進行消除
    </div>
    <div class="match-grid">
      ${gridHtml}
    </div>
  `;

  window.matchingState = {
    selectedIdx: null,
    selectedId: null,
    matchedCount: 0
  };
}

// 配對點擊處理
function handleMatchClick(idx, id) {
  const cardElem = document.getElementById(`match-${idx}`);
  if (!cardElem || cardElem.classList.contains("matched")) return;

  const st = window.matchingState;
  
  if (st.selectedIdx === null) {
    // 第一次點擊
    st.selectedIdx = idx;
    st.selectedId = id;
    cardElem.classList.add("selected");
  } else if (st.selectedIdx === idx) {
    // 取消點擊
    cardElem.classList.remove("selected");
    st.selectedIdx = null;
    st.selectedId = null;
  } else {
    // 第二次點擊配對
    const prevElem = document.getElementById(`match-${st.selectedIdx}`);
    if (st.selectedId === id) {
      // 成功配對！
      cardElem.classList.add("matched");
      if (prevElem) prevElem.classList.add("matched");
      APP_STATE.gameScore += 25;
      showToast("💥 消除成功！");
      st.matchedCount++;
      
      st.selectedIdx = null;
      st.selectedId = null;

      if (st.matchedCount >= 4) {
        APP_STATE.day1Reviewed = true;
        showToast("🔓 配對全數消除！通過強制複習！");
        updateDashboardUI();
        setTimeout(() => switchView("learn-view"), 1200);
      }
    } else {
      // 失敗
      cardElem.classList.add("selected");
      showToast("❌ 意涵不匹配，再試一次！");
      setTimeout(() => {
        cardElem.classList.remove("selected");
        if (prevElem) prevElem.classList.remove("selected");
        st.selectedIdx = null;
        st.selectedId = null;
      }, 500);
    }
  }
}

/* ================= 社群打卡區 (Social Post & Card Builder) ================= */

// 渲染可選擇之單字 Chip
function renderSocialWordChips() {
  const container = document.getElementById("socialWordChips");
  if (!container) return;

  const vocabList = getVocabList().slice(0, 5);
  let chipsHtml = "";
  vocabList.forEach(v => {
    chipsHtml += `<span class="word-chip" onclick="insertWordToPost('${v.word}')">+ ${v.word}</span>`;
  });
  container.innerHTML = chipsHtml;
}

// 點擊 Chip 將單字插入輸入框
function insertWordToPost(word) {
  const input = document.getElementById("postTextarea");
  if (input) {
    input.value += ` ${word} `;
    input.focus();
  }
}

// 發布社群貼文打卡
function submitSocialPost() {
  const input = document.getElementById("postTextarea");
  const text = input ? input.value.trim() : "";

  if (!text) {
    showToast("⚠️ 請寫下一句包含今日單字的打卡造句！");
    return;
  }

  APP_STATE.socialPosted = true;
  APP_STATE.streak += 1; // 打卡連勝天數 +1
  showToast("🎉 打卡成功！每日連勝記錄 +1 天！");
  updateDashboardUI();

  // 生成 Instagram 風格分享卡片 Modal
  showPreviewShareCard(text);
}

// 生成分享圖卡 Modal
function showPreviewShareCard(text) {
  const modal = document.getElementById("previewCardModal");
  const img = document.getElementById("previewModalImg");
  const postText = document.getElementById("previewModalText");
  const streakLabel = document.getElementById("previewModalStreak");

  if (img) img.src = SAMPLE_PHOTOS[APP_STATE.selectedPhotoIndex];
  if (postText) postText.textContent = text;
  if (streakLabel) streakLabel.textContent = `🔥 Continuous Streak: ${APP_STATE.streak} Days`;

  if (modal) modal.style.display = "block";
}

function closePreviewCard() {
  const modal = document.getElementById("previewCardModal");
  if (modal) modal.style.display = "none";
  switchView("home-view");
}

// 全域 Toast 通知
function showToast(msg) {
  const toast = document.getElementById("toastMsg");
  if (toast) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
}
