const hrsBtn = document.querySelector(".hrsBtn");
const minBtn = document.querySelector(".minBtn");
const secBtn = document.querySelector(".secBtn");
const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");

// START 버튼을 클릭해 타이머 시작하기
startBtn.addEventListener("click", () => {
  //   startBtn.classList.toggle = "pauseBtn";
  if (startBtn.classList.includes("pauseBtn")) {
    startBtn.innerText = "START";
  } else {
    startBtn.innerText = "PAUSE";
  }
});
// timeInput 버튼을 클릭해 시작시간 설정하기
secBtn.addEventListener("click", () => {
  secBtn.innerText = parseInt(secBtn.innerText) + 10;
});
minBtn.addEventListener("click", () => {
  minBtn.innerText = parseInt(minBtn.innerText) + 5;
});
hrsBtn.addEventListener("click", () => {
  hrsBtn.innerText = parseInt(hrsBtn.innerText) + 1;
});
