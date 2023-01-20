// window.onresize = function(){ location.reload(); }

var width = 0;
var perView = 0;

// window.addEventListener("resize", function(event) {
//   console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
//   width = document.body.clientWidth;
// })

// if (width >= 260 || width <= 600){
//   perView = 2;
// }

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
   
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".secSwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".thirdSwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });