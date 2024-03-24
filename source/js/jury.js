import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const mySwiper = new Swiper('.jury__swiper', { //eslint-disable-line
  modules: [Navigation],
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  initialSlide: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
