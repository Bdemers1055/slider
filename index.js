const Slider = {
    slides: ['slide1', 'slide2', 'slide3'],
    slideIndex: 0,
    init() {
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom() {
      this.sliderCarousal = document.querySelector('.slider');
    //   this.slideImage = document.querySelector('.slide');
      this.paginationIcons = document.querySelector('.pagination');
      this.previousArrow = document.querySelector('.fa-arrow-circle-left')
      this.nextArrow = document.querySelector('.fa-arrow-circle-right')
    },
    render(){
        this.sliderCarousal.classList.remove(...this.slides);
        this.sliderCarousal.classList.add(this.slides[this.slideIndex]);
      },
    bindEventListeners() {
        this.previousArrow.addEventListener('click', this.showPreviousSlide.bind(this));
        this.nextArrow.addEventListener('click', this.showNextSlide.bind(this));
    },
    showPreviousSlide() {
        this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
        this.render();
    },
    showNextSlide() {
        this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
        this.render();
    },
};

Slider.init();
window.Slider = Slider;




// Import stylesheets
// import './style.css';

// const ColorBox = {
//   colors: ['red', 'blue', 'green'],
//   colorIndex: 0,
//   init(){
//     this.cacheDom();
//     this.bindEventListeners();
//     this.render();
//   },
//   cacheDom(){
//     this.root = document.querySelector('#app');
//     this.box = this.root.querySelector('.box');
//     this.left = this.root.querySelector('.left');
//     this.right = this.root.querySelector('.right');
//   },
//   bindEventListeners(){
//     this.left.addEventListener('click', this.leftColorChange.bind(this));
//     this.right.addEventListener('click', this.rightColorChange.bind(this));
//   },
//   render(){
//     this.box.classList.remove(...this.colors);
//     this.box.classList.add(this.colors[this.colorIndex]);
//   },
//   leftColorChange(){
//     this.colorIndex = (this.colorIndex - 1 + this.colors.length) % this.colors.length;
//     this.render();
//   },
//   rightColorChange(){
//     this.colorIndex = (this.colorIndex + 1 + this.colors.length) % this.colors.length;
//     this.render();
//   }
// };

// ColorBox.init();
// window.ColorBox = ColorBox;
  