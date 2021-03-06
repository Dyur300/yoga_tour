$(document).ready(function(){
  $('.big-slider').slick({
    arrows: false,
    infiniti: true,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    speed: 1000,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
          }
    },
    {
      breakpoint: 600,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      }
  },
  ],
  });
  $('.coach-slider').slick({
    arrows: false,
    dots: true,
  });
  $('.reviews-slider').slick({
    arrows: true,
    dots: true,
    infiniti: true,
  });
});