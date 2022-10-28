console.log('it works');

const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  // console.log(event);
  console.log('you clicked it');
  event.preventDefault();

  const shouldChangePage = confirm(
    'This website might be malicious, do you wish to proceed?'
  );

  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
  // or
  // if (!shouldChangePage) {
  //   event.preventDefault();
  // }

  console.log(shouldChangePage);
});

// const signupForm = document.querySelector('[name="signup"]');

// signupForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   // console.dir(event.currentTarget);
//   console.log(event.currentTarget.name.value);
//   console.log(event.currentTarget.email.value);
//   console.log(event.currentTarget.agree.checked);

//   const name = event.currentTarget.name.value;

//   if (name.includes('chad')) { // includes is not case sensitive
//     alert('Sorry bro');
//     event.preventDefault();
//   }
// });

// function logEvent(event) {
//   console.log(event.type);
//   console.log(event.currentTarget.value);
// }
// signupForm.name.addEventListener('keyup', logEvent);

// key events
// 'keyup'
// 'keydown'
// 'keypress'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);

// keycode.info website
