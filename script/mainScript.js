const ls = document.querySelectorAll("li > a");
const contents = document.querySelectorAll("main > div");

var page = 0; // 현재 표시되는 페이지
var lastPage = contents.length - 1; // 마지막 페이지(현재는 mian > div)

window.addEventListener("scroll", function (e) {
  for (let i = 0; i <= lastPage; i++) {
    // scroll 시 화면에 표시되는 영역에 해당하는 li 색 변경
    if (
      contents[i].getBoundingClientRect().top >= -450 &&
      contents[i].getBoundingClientRect().top <= 450
    ) {
      ls[i].style.color = "rgba(140, 199, 248)";
    } else {
      ls[i].style.color = "rgba(36, 136, 218, 0)";
    }
  }
});

// 마우스 따라다니는 div
document.addEventListener("mousemove", function (e) {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  mouse_cs.style.left = mouseX + "px";
  mouse_cs.style.top = mouseY + "px";
});
