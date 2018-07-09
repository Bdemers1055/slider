const Slider = {
    circles1: ['circle1', 'circle-o', 'circle-o'],
    circles2: ['circle-o', 'circle2', 'circle-o'],
    circles3: ['circle-o', 'circle-o', 'circle3'],
    slideIndex: 0,
    circles1Index: 0,
    circles2Index: 0,
    circles3Index: 0,
    init() {
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom() {
      this.sliderCarousal = document.querySelector('.slider');
      this.slides = this.sliderCarousal.querySelectorAll('img');
      this.paginationIcon1 = document.querySelector('.circle1');
      this.paginationIcon2 = document.querySelector('.circle2');
      this.paginationIcon3 = document.querySelector('.circle3');
      this.previousArrow = document.querySelector('.fa-arrow-circle-left')
      this.nextArrow = document.querySelector('.fa-arrow-circle-right')
    },
    render(){
        this.sliderCarousal.style.right = `${400 * (this.slideIndex - 1)}px`;
        this.paginationIcon1.classList.remove(...this.circles1);
        this.paginationIcon1.classList.add(this.circles1[this.circles1Index]);
        this.paginationIcon2.classList.remove(...this.circles2);
        this.paginationIcon2.classList.add(this.circles2[this.circles2Index]);
        this.paginationIcon3.classList.remove(...this.circles3);
        this.paginationIcon3.classList.add(this.circles3[this.circles3Index]);
      },
    bindEventListeners() {
        this.previousArrow.addEventListener('click', this.showPreviousSlide.bind(this));
        this.nextArrow.addEventListener('click', this.showNextSlide.bind(this));
        this.previousArrow.addEventListener('click', this.activatePreviousIcon.bind(this));
        this.nextArrow.addEventListener('click', this.activateNextIcon.bind(this));
    },
    showPreviousSlide() {
        this.slideIndex = (this.slideIndex + 1 + this.slides.length) % this.slides.length;
        this.render();
    },
    showNextSlide() {
        this.slideIndex = (this.slideIndex + 1 + this.slides.length) % this.slides.length;
        this.render();
    },
    activatePreviousIcon() {
        this.circles1Index = (this.circles1Index - 1 + this.circles1.length) % this.circles1.length;
        this.circles2Index = (this.circles2Index - 1 + this.circles2.length) % this.circles2.length;
        this.circles3Index = (this.circles3Index - 1 + this.circles3.length) % this.circles3.length;
        this.render();
    },
    activateNextIcon() {
        this.circles1Index = (this.circles1Index + 1 + this.circles1.length) % this.circles1.length;
        this.circles2Index = (this.circles2Index + 1 + this.circles2.length) % this.circles2.length;
        this.circles3Index = (this.circles3Index + 1 + this.circles3.length) % this.circles3.length;
        this.render();
    }
};

Slider.init();
window.Slider = Slider;