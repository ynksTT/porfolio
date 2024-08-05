$(function () {
  $('.mainpic-slick').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

    // ボタンアニメーション
    $('.home').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5,
        
      }, 100);
    });

    $('.home').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0,
        
      }, 100);
    });

    $('.button-more').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5,
        
      }, 100);
    });
    $('.button-more').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0,
        
      }, 100);
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


  
    // 各セクションのフェードイン
    $(window).scroll(function (){
      $('.js-fade').each(function(){
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 100){
          $(this).addClass('scroll');
        }
      });
    });


    // /画像の拡大表示/ 
    // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
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

});


