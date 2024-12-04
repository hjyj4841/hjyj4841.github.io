const mHtml = document.querySelector("html");
const nav = document.querySelector("nav");
const ls = document.querySelectorAll("nav li > a");
const circles = document.querySelectorAll(".circle");
const circleRings = document.querySelectorAll(".circle + div");
const sections = document.querySelectorAll("main > section");
const maintexts = document.querySelectorAll("#home div > h1 ");
const infoSelects = document.querySelectorAll("#informationSelect > div");
const infoTexts = document.querySelectorAll("#informationText > div");

const mainStr = ["WEB DEVELOPER", "LEE DONG-YEOP", "PORTPOLIO"];
let homeTimer = 0;

// Home에 텍스트 이벤트 들어가는 함수
function mainTextAnimation(count) {
  setTimeout(() => {
    maintexts[count].textContent += mainStr[count][homeTimer];
    homeTimer++;

    if (homeTimer < mainStr[count].length) mainTextAnimation(count);
    else {
      maintexts[count].style.animation = "none";
      // 2번 3번 애니메이션 이어지도록
      homeTimer = 0;
      count++;
      if (count < 3) {
        maintexts[count].style.animation = "fakeKey 0.5s step-end infinite";
        mainTextAnimation(count);
      }
    }
  }, 100);
}

// 페이지 로드시 첫화면 애니메이션 발생
mainTextAnimation(0);
