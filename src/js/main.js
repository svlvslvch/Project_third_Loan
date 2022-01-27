import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page', 
        btns: 'a.next',
    });
    slider.render();

    const modulePageSlider = new MainSlider({
        container: '.moduleapp',
        btns: 'a.next',
        btnsNext: '.nextmodule',
        btnsPrev: '.prevmodule'
    });
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container:'.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
    });
    showUpSlider.init();

    const moduleSlider = new MiniSlider({
        container:'.modules__content-slider',
        slides: '.modules__content-slider .card',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        autoplay: true,
    }); 
    moduleSlider.init();

    const feedSlider = new MiniSlider({
        container:'.feed__slider',
        slides: '.feed__slider .feed__item ',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });
    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    new Difference('.officerold', '.officer__card-item').init();
    new Difference('.officernew', '.officer__card-item').init();

    new Form('.form').init();
});