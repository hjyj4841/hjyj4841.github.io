// 메인 이벤트
function mainTextAnimation() {
  $("#home-section div").each((i, section) => {
    setTimeout(() => {
      $(section).css({
        textShadow: "3px 3px 30px #555555",
        color: "white"
      });
      
      if (i < $("#home-section div").length - 1) {
        $($(".main-text")[i]).css({
          color: "#555555",
          transition: "3s"
        });
      } else {
        $(".main-name").css({
          color: "#555555",
          transition: "3s"
        });
      }
    }, i === 0 ? 100 : (i * 1000));
  });
}

// 페이지 로드시 첫화면 애니메이션 발생
mainTextAnimation();

// 스크롤 이벤트
$(window).scroll(function(){
    
  const about = $("#about-section").offset().top;
  let height = $(document).scrollTop();
  const windowHeight = $(window).height(); // 윈도우 높이

    if(about <= height){
      $("header").css("backgroundColor", "rgba(205, 201, 195, 0.8)");
    } else {
      $("header").css("backgroundColor", "rgba(85, 85, 85, 0.8)");
    }

    $(".sc-event").each(function() {
      const sc = $(this);

      if (height + windowHeight * 0.8 > sc.offset().top) {
        sc.css({
          animation: "fadeInUp 1.5s",
          opacity: "1"});
      } 
    });
});

// 포트폴리오 이미지 변경
const flowImages = $("#flow-img img");
let flowIndex = 0;
const vibeImages = $("#vibe-img img");
let vibeIndex = 0;

$("#flow-prev").click(function() {
  $(flowImages[flowIndex]).animate({ opacity: 0 }, 500);
  flowIndex = (flowIndex - 1 + flowImages.length) % flowImages.length;
  $(flowImages[flowIndex]).animate({ opacity: 1 }, 500);
});

$("#flow-next").click(function() {
  $(flowImages[flowIndex]).animate({ opacity: 0 }, 500);
  flowIndex = (flowIndex + 1) % flowImages.length;
  $(flowImages[flowIndex]).animate({ opacity: 1 }, 500);
});

$("#vibe-prev").click(function() {
  $(vibeImages[vibeIndex]).animate({ opacity: 0 }, 500);
  vibeIndex = (vibeIndex - 1 + vibeImages.length) % flowImages.length;
  $(vibeImages[vibeIndex]).animate({ opacity: 1 }, 500);
});

$("#vibe-next").click(function() {
  $(vibeImages[vibeIndex]).animate({ opacity: 0 }, 500);
  vibeIndex = (vibeIndex + 1) % vibeImages.length;
  $(vibeImages[vibeIndex]).animate({ opacity: 1 }, 500);
});