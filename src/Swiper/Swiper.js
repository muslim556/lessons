import React from 'react'
import "./Swiper.css"
 import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
export function SwiperJS() {
  return (
 <>
    <div className="swiper">
  <div className="swiper-wrapper">
    <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
    ...
  </div>
  <div className="swiper-pagination"></div>

  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>

  <div className="swiper-scrollbar"></div>
</div>
    </>
  )
}
