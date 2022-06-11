<template>
  <div class="bg-white py-14">
    <div class="text-center mb-8">
        <small class="font-['Montserrat-medium'] text-[17px] text-black opacity-30">Gallery photos about you</small>
        <h3 class="font-['Montserrat-bold'] text-[24px]">Şəkil Gallery</h3>
    </div>
    <Carousel :itemsToShow='1.95'>
        <Slide v-for='(picture, index) in pictures' :key='index'>
            <div class='carousel__item bg-cover bg-no-repeat' :style="'background-image: url('+picture+')'"></div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import pic1 from "../assets/images/gallery/pic1.png";
import pic2 from "../assets/images/gallery/pic2.jpeg";
import pic3 from "../assets/images/gallery/pic3.jpeg";
import pic4 from "../assets/images/gallery/pic4.jpeg";

export default {
    data() {
        return {
            pictures: [
                pic1,
                pic2,
                pic3,
                pic4
            ],
        }
    },

    components: {
        Carousel,
        Slide,
        Pagination
    }
}
</script>

<style>
.carousel__item {
  min-height: 500px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev, .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
  border-radius: 8px !important;
}

button.carousel__pagination-button {
    background-color: #ffffff !important;
    border: solid 1px #E5E5E5 !important;
    width: 11px;
    height: 11px;
}

button.carousel__pagination-button.carousel__pagination-button--active {
    background-color: #4A5977 !important;
}
</style>