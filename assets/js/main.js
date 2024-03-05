$(function(){

  /**
   * header menu -> hover
   */
  $('.menu-item:first-child').mouseover(function(e){
    e.preventDefault();
    $('.menu-item, .sub-list').addClass('on');
  });
  $('.menu-item:first-child .sub-list, .menu-item').mouseout(function(e){
    e.preventDefault();
    $('.menu-item, .sub-list').removeClass('on');
  });


  /* visual swiper */
  const visualSlide = new Swiper(".visual-slide", {
    loop : true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  });
  visualSlide.on('slideChange', function () { // text animation
    $('.visual-slide .title').fadeIn(1000);
  });
  

  /* people swiper */
  const groupSlide = new Swiper(".people-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev",
    },
    breakpoints: {
      768: { slidesPerView: 1, spaceBetween: 30,}, // 화면의 넓이가 768px 이상일 때
      1024: { slidesPerView: 1.2, spaceBetween: 30, }, // 화면의 넓이가 1024px 이상일 때
    }
  });


  /* benefits swiper */
  const benefitsSlide = new Swiper(".benefits-slide", {
    slidesPerView: 1, // 화면의 넓이가 768px 이하일때
    spaceBetween: 15,
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 30, }, // 화면의 넓이가 768px 이상일 때
      1024: { slidesPerView: 3, spaceBetween: 30, }, // 화면의 넓이가 1024px 이상일 때
    },
  });

  /**
   * option select color event 
  */
  $('select').change(function(){
    $(this.css('color', '#000'));
  });

  /**
   * footer relrate 
   */ 
  $('.btn-relrate').click(function(){
    $('.relrate-site').toggleClass('on');
  });


  
  /**
   * mobile menu -> show/hide
   */
  $('#navBtn').click(function(){
    $('.group-aside').toggleClass('on');
    $('.btn-nav').toggleClass('close');
  });


  /**
   * mobile search popup -> show/hide
   */
  $('.search-area-mo').click(function(){
    $('.sc-popup').addClass('on');
    $('body').addClass('scroll');
  });
  $('.sc-popup .btn-close').click(function(){
    $('.sc-popup').removeClass('on');
    $('body').removeClass('scroll');
  });

  /**
   * search popup -> list
   */
  $('.title').click(function(){
    $(this).siblings('.group-filter .sub-list1').toggleClass('on');
    $(this).siblings('.group-filter .sub-list2').toggleClass('on');
    $(this).toggleClass('on');
  });

  $('.all-ch').click(function(){
    if ($(this).siblings('input').prop('checked')) {
      $(this).parent().siblings().find('input').prop('checked',false);
    } else {
      $(this).parent().siblings().find('input').prop('checked',true);
    }
    
    // 
    $(this).find('input').prop('checked',true);

  });

  $('.btn-clear').click(function(){
    $('.group-filter input').prop('checked',false);
  });

});