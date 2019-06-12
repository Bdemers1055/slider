const Slider = {
  slideIndex: 0,
  circleColors: ["red", "orange", "yellowgreen"],
  init() {
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom() {
    this.sliderCarousal = document.querySelector(".slider");
    this.slides = this.sliderCarousal.querySelectorAll("img");
    this.circles = document.querySelectorAll(".circle-o");
    this.previousArrow = document.querySelector(".fa-arrow-circle-left");
    this.nextArrow = document.querySelector(".fa-arrow-circle-right");
  },
  render() {
    this.sliderCarousal.style.right = `${400 * (this.slideIndex - 1)}px`;
    this.circles.forEach(child => child.classList.remove(...this.circleColors));
    const color = this.circleColors[this.slideIndex];
    this.circles[this.slideIndex].classList.add(color);
  },
  bindEventListeners() {
    this.previousArrow.addEventListener(
      "click",
      this.showPreviousSlide.bind(this)
    );
    this.nextArrow.addEventListener("click", this.showNextSlide.bind(this));
  },
  showPreviousSlide() {
    this.slideIndex =
      (this.slideIndex - 1 + this.slides.length) % this.slides.length;
    this.render();
  },
  showNextSlide() {
    this.slideIndex =
      (this.slideIndex + 1 + this.slides.length) % this.slides.length;
    this.render();
  }
};

Slider.init();
window.Slider = Slider;
