// create own prototype file
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
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // first thing in this array will be prev
        // second will be current
        // third will be next
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
      // // 2 => 1, 3 => 2, 4 => 3
      // [2, 3, 4] = [1, 2, 3];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }


  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}


const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
