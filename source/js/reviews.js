import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const mySwiper = new Swiper('.reviews__swiper', { //eslint-disable-line
  modules: [Navigation],
  grabCursor: true,
  navigation: {
    nextEl: '.reviews-swiper__button-next',
    prevEl: '.reviews-swiper__button-prev',
  },
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 0,
});
