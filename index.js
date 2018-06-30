const slider = {
    isActive: false,
    selectedImage: '',
    init() {
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom() {
      this.sliderCarousal = document.querySelector('.slider');
      this.slideImage = document.querySelector('.slide');
      this.paginationIcons = document.querySelector('.pagination');
      this.previousArrow = document.querySelector('.fa-arrow-circle-left')
      this.nextArrow = document.querySelector('.fa-arrow-circle-right')
    },
    bindEventListeners() {
        // this.previousArrow.addEventListener('click', this.showPreviousSlide.bind(this));
        this.nextArrow.addEventListener('click', this.showNextSlide.bind(this));
    },
    showNextSlide(e) {
        if (e.target.tagName === 'IMG') {
            this.isActive = true;
            this.selectedImage = '';
            this.render();
        }
    },
    render() {
        if (this.isActive) {
          this.sliderCarousal.classList.remove('active');
        } else {
          this.sliderCarousal.classList.add('active');
          this.slideImage.src = this.selectedImage;
        }
      },
};

slider.init();
  