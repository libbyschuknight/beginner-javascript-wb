function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider passed in');
  }

  // create some variables for working with the slider
  let current;
  let prev;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
  }

  // 22mins02secs

  // when this slider is created, run the start slider function
  startSlider();
}


const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
