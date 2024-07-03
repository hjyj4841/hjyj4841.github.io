const mHtml = document.querySelector("html");
const ls = document.querySelectorAll("nav li > a");
const circles = document.querySelectorAll("nav li > div");
const sections = document.querySelectorAll("main > section");

var page = 0; // 현재 표시되는 페이지
var lastPage = sections.length - 1; // 마지막 페이지(현재는 mian > div)

// 현재 위치한 윈도우창의 상단 부분 이동하는 html
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
    win.scrollTo(win.pageXOffset, value);
  } else {
    el.scrollTop = value;
  }
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
  // if (mHtml.is(":animated")) return;

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
    // scroll 시 화면에 표시되는 영역에 해당하는 li 색 변경
    if (sections[i].getBoundingClientRect().top == 0) {
      ls[i].style.color = "rgb(74, 171, 250)";
      circles[i].style.backgroundColor = "rgb(74, 171, 250)";
      circles[i].style.width = "8px";
      circles[i].style.height = "8px";
    } else {
      ls[i].style.color = "gray";
      circles[i].style.backgroundColor = "gray";
      circles[i].style.width = "5px";
      circles[i].style.height = "5px";
    }
  }
});

// li > a 클릭하여 이동시 page값 바꾸기
for (let i = 0; i <= lastPage; i++) {
  ls[i].addEventListener("click", function () {
    page = i;
  });
}

// 새로고침 시 상단으로 강제 이동
window.addEventListener("load", function () {
  scrollTop(mHtml, 0);
});
