// modal

let showMap = document.querySelector(".contacts__img-map");
let map_modal = document.querySelector(".map-modal");
let closeMap = document.querySelector(".map-modal .modal-close");
let feedback_btn = document.querySelector(".contacts__btn");
let feedback_modal = document.querySelector(".feedback-modal");
let closeFeedback = document.querySelector(".feedback-modal .modal-close");
const feedback_input = feedback_modal.querySelector('[name=feedback-modal__name]');

showMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map_modal.classList.remove("hidden");
});

closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map_modal.classList.add("hidden");
});

feedback_btn.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_modal.classList.remove("hidden");
  feedback_input.focus();
});

closeFeedback.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_modal.classList.add("hidden");
});

// sign in
let sign_in = document.querySelector('.user-sign-in');
let sign_out = document.querySelector('.user-sign-out');
let user_nav = document.querySelector('.main-nav__list .layout-user');
// footer
let sign_in_footer = document.querySelector('.main-footer__user .user-sign-in');
let sign_out_footer = document.querySelector('.main-footer__user .user-sign-out');
let user_nav_footer = document.querySelector('.main-footer__nav-list .sign-in');
let user_logged;

sign_in.addEventListener("click", function(evt){
  evt.preventDefault();
  user_nav.classList.toggle("sign-out");
  user_nav.classList.toggle("sign-in");
  user_logged = true;
  console.log(user_logged);
});

sign_out.addEventListener("click", function(evt){
  evt.preventDefault();
  user_nav.classList.toggle("sign-out");
  user_nav.classList.toggle("sign-in");
  user_logged = false;
  console.log(user_logged);
});

sign_in_footer.addEventListener("click", function(evt){
  evt.preventDefault();
  user_nav_footer.classList.toggle("sign-out");
  user_nav_footer.classList.toggle("sign-in");
  user_logged = true;
  console.log(user_logged);
});

sign_out_footer.addEventListener("click", function(evt){
  evt.preventDefault();
  user_nav_footer.classList.toggle("sign-out");
  user_nav_footer.classList.toggle("sign-in");
  user_logged = false;
  console.log(user_logged);
});

const promo = document.querySelector('.promo');
const promo_slider_btn_1 = promo.querySelector('.promo__slider-controler-btn--1');
const promo_slider_btn_2 = promo.querySelector('.promo__slider-controler-btn--2');
const promo_slider_btn_3 = promo.querySelector('.promo__slider-controler-btn--3');
const promo_slide_1 = promo.querySelector('.promo__item-1');
const promo_slide_2 = promo.querySelector('.promo__item-2');
const promo_slide_3 = promo.querySelector('.promo__item-3');

promo_slider_btn_1.addEventListener('click', function(evt){
  evt.preventDefault();
  promo_slide_2.classList.remove("promo__item--current");
  promo_slide_3.classList.remove("promo__item--current");
  promo_slide_1.classList.add("promo__item--current");
  // controler
  promo_slider_btn_2.classList.remove("promo__slider-btn--current");
  promo_slider_btn_3.classList.remove("promo__slider-btn--current");
  promo_slider_btn_1.classList.add("promo__slider-btn--current");
});

promo_slider_btn_2.addEventListener('click', function(evt){
  evt.preventDefault();
  promo_slide_1.classList.remove("promo__item--current");
  promo_slide_3.classList.remove("promo__item--current");
  promo_slide_2.classList.add("promo__item--current");
  // controler
  promo_slider_btn_1.classList.remove("promo__slider-btn--current");
  promo_slider_btn_3.classList.remove("promo__slider-btn--current");
  promo_slider_btn_2.classList.add("promo__slider-btn--current");
});

promo_slider_btn_3.addEventListener('click', function(evt){
  evt.preventDefault();
  promo_slide_1.classList.remove("promo__item--current");
  promo_slide_2.classList.remove("promo__item--current");
  promo_slide_3.classList.add("promo__item--current");
  // controler
  promo_slider_btn_1.classList.remove("promo__slider-btn--current");
  promo_slider_btn_2.classList.remove("promo__slider-btn--current");
  promo_slider_btn_3.classList.add("promo__slider-btn--current");
});

const features = document.querySelector('.features');
const features__item_1 = features.querySelector('.features__item--1 div');
const features__item_2 = features.querySelector('.features__item--2 div');
const features__item_3 = features.querySelector('.features__item--3 div');
const features_1 = features.querySelector('.features__item-right--delivery');
const features_2 = features.querySelector('.features__item-right--guarantee');
const features_3 = features.querySelector('.features__item-right--credit');

features__item_1.addEventListener('click', function(evt){
  evt.preventDefault();
  features__item_2.classList.remove("features__btn--current");
  features__item_3.classList.remove("features__btn--current");
  features__item_1.classList.add("features__btn--current");
  // slides
  features_2.classList.remove("features__item-right--current");
  features_3.classList.remove("features__item-right--current");
  features_1.classList.add("features__item-right--current");
});

features__item_2.addEventListener('click', function(evt){
  evt.preventDefault();
  features__item_1.classList.remove("features__btn--current");
  features__item_3.classList.remove("features__btn--current");
  features__item_2.classList.add("features__btn--current");
  // slides
  features_1.classList.remove("features__item-right--current");
  features_3.classList.remove("features__item-right--current");
  features_2.classList.add("features__item-right--current");
});

features__item_3.addEventListener('click', function(evt){
  evt.preventDefault();
  features__item_1.classList.remove("features__btn--current");
  features__item_2.classList.remove("features__btn--current");
  features__item_3.classList.add("features__btn--current");
  // slides
  features_1.classList.remove("features__item-right--current");
  features_2.classList.remove("features__item-right--current");
  features_3.classList.add("features__item-right--current");
});
// ...
