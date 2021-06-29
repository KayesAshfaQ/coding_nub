$(".btt").click(function(){
    $("html,body").animate({
      scrollTop:0
    },100)
  })
  
  $(window).scroll(function(){
    if($(window).scrollTop() > 600){
      $(".btt").fadeIn()
    }else{
      $(".btt").fadeOut()
    }
    if($(window).scrollTop() > 200){
        $(".menu").addClass("sticky")
      }else{
        $(".menu").removeClass("sticky")
      }
  })

// preloader start

$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 2000;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });

// preloader end

// venobox
$('.venobox').venobox();  
