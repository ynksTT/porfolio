$(function () {

// ボタンアニメーション
$('a').on('mouseover', function () {
  $(this).animate({
    opacity: 0.5, 
  }, 100);
});

$('a').on('mouseout', function () {
  $(this).animate({
    opacity: 1.0,
  }, 100);
});

 // /画像の拡大表示/ 
    // Worksの画像をクリックしたときにモーダルで拡大表示する
    $('.pickup_js img').click(function () {
      const imgSrc = $(this).attr('src');
      $('.big-img').attr('src', imgSrc);
      $('.modal').fadeIn();
      return false
    });
  
    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close-btn').click(function () {
      $('.modal').fadeOut();
      return false
    });
  
     // スクロールアニメーション
     var showFlag = false;
     var topBtn = $('#page-top');	
     topBtn.css('bottom', '-100px');
     var showFlag = false;
     //スクロールが100に達したらボタン表示
     $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
         if (showFlag == false) {
           showFlag = true;
           topBtn.stop().animate({'bottom' : '20px'}, 200); 
         }
       } else {
         if (showFlag) {
           showFlag = false;
           topBtn.stop().animate({'bottom' : '-100px'}, 200); 
         }
       }
     });
     
     //スクロールしてトップ
       topBtn.click(function () {
       $('body,html').animate({
         scrollTop: 0
       }, 500);
       return false;
       });


});




