const mHtml = document.querySelector("html");
const nav = document.querySelector("nav");
const ls = document.querySelectorAll("nav li > a");
const circles = document.querySelectorAll(".circle");
const circleRings = document.querySelectorAll(".circle + div");
const sections = document.querySelectorAll("main > section");
const maintexts = document.querySelectorAll("#home div > h1 ");

let page = 0; // 현재 표시되는 페이지
const lastPage = sections.length - 1; // 마지막 페이지(현재는 mian > div)
const mainStr = ["WELCOME TO", "DONG YEOP'S", "PORTPOLIO"];
let homeTimer = 0;

// 현재 위치한 윈도우창의 상단 부분으로 이동
function scrollTop(el, value) {
  var win;
  if (el.window === el) {
    win = el;
  } else if (el.nodeType === 9) {
    win = el.defaultView;
  }

  if (value === undefined) {
    return win ? win.pageYOffset : el.scrollTop;
  }

  if (win) {
    win.scrollTop(win.pageXOffset, value);
  } else {
    el.scrollTop = value;
  }
}

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
      } //else {   // 이어서 나올 위치 이동 애니메이션 구현 중
      //   maintexts[0].parentNode.style.animation = "move1 1s linear forwards";
      // }
    }
  }, 100);
}

// scroll 못하게 막는 event
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

// wheel을 돌렸을 때 발생하는 event
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    if (page == 4) return;
    page++;
  } else if (e.deltaY < 0) {
    if (page == 0) return;
    page--;
  }
  var posTop = page * this.window.innerHeight;
  scrollTop(mHtml, posTop);
});

// scroll 되면 해당 메뉴 text color 변경
window.addEventListener("scroll", function (e) {
  for (let i = 0; i <= lastPage; i++) {
    if (page != 0) {
      nav.style.animation = "navMove2 1s forwards";
    } else {
      nav.style.animation = "navMove1 1s forwards";
    }
    // scroll 시 화면에 표시되는 영역에 해당하는 li 색 변경
    if (sections[i].getBoundingClientRect().top == 0) {
      ls[i].style.color = "rgb(74, 171, 250)";
      circles[i].style.backgroundColor = "rgb(74, 171, 250)";
      circleRings[i].classList.add("ring");
    } else {
      ls[i].style.color = "gray";
      circles[i].style.backgroundColor = "gray";
      circleRings[i].classList.remove("ring");
    }
  }
});

// li > a 클릭하여 이동시 page값 바꾸기
for (let i = 0; i <= lastPage; i++) {
  ls[i].addEventListener("click", function () {
    page = i;
  });
}

// 페이지 로드시 첫화면 애니메이션 발생
mainTextAnimation(0);
// 페이지 로드시 html 상단으로 이동
scrollTop(mHtml, 0);
