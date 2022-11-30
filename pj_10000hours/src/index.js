//section
const loadingSection = document.querySelector(".cont-result-loading");
const resultSection = document.querySelector(".sec_result");
const modalSection = document.querySelector("#modal");

//button
const startButton = document.querySelector(".btn-exc");
const openButton = document.querySelector(".btn-go");
const closeButton = document.querySelector(".btn-close");
const shareButton = document.querySelector(".btn-share");

function calculate() {
  const fieldValue = document.querySelector("#inp-field");
  const timeValue = document.querySelector("#inp-time");

  if (fieldValue.value === ""){
    alert("비정상 접근입니다.") 
    else if(timeValue.value === ""){

    } else if(timeValue >= 24){

    }
  }
  const fieldResult = document.querySelector("#field-result");
  const timeResult = document.querySelector("#time-result");
  // .cont-result-loading이 먼저 보이고 result가 나중에 보여야 합니다. 
  loadingSection.style.display = "block"

}
function openModal() {}
function copyUrl() {}
function closeModal() {}

startButton.addEventListener("click", calculate);
openButton.addEventListener("click", openModal);
shareButton.addEventListener("click", copyUrl);
closeButton.addEventListener("click", closeModal);
