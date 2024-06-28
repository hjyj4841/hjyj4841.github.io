document.addEventListener("mousemove", function (e) {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  mouse_cs.style.left = mouseX + "px";
  mouse_cs.style.top = mouseY + "px";
});
