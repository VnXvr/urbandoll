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