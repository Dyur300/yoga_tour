$(document).ready(function(){
  $('.expectation-slider').slick({
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
});