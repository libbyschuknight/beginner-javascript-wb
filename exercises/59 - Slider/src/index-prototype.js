// create own prototype file
// this is a constructor function
function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider passed in');
  }

  // select the elements needed for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // when this slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // Event listeners
  prevButton.addEventListener('click', () => this.move('back'));
  // nextButton.addEventListener('click', this.move.bind(this));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // first strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    // make an new array of the new values, and destructure them over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      // first thing in this array will be prev
      // second will be current
      // third will be next
      // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
    // // 2 => 1, 3 => 2, 4 => 3
    // [2, 3, 4] = [1, 2, 3];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the next slide, or if it's at the end, loop around and grab the first slide
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

window.dogSlider = dogSlider;

window.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (event.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
