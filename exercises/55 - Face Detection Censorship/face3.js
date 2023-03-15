console.log('face 3 works oh yes it does');
// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.


const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

// const faceDetector = new window.FaceDetector();
const faceDetector = new FaceDetector({ fastMode: true });

const SIZE = 10;
const SCALE = 1.35;

const optionsInputs = document.querySelectorAll('.controls input[type="range"]');




const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  // console.log(event.currentTarget.value);
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption));


// console.log(video)
// console.log(canvas)
// console.log(faceCanvas)
// console.log(faceDetector)

// write a function that will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });

  video.srcObject = stream;
  await video.play();

  // size the canvases to be the same size as the video
  // console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

// console.log(populateVideo); // store as global variable - temp1

async function detect() {
  const faces = await faceDetector.detect(video);

  // console.log(faces);
  // ask the browser when the next animation frame is, and tell it to run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  // faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  // console.log({width, height, top, left}); // width: width, height: height, top: top, left: left - is what going {width, height, top, left} is doing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  // take that face back out and draw it back at normal size
  // take the face out of the video and draw it back at a smaller size

  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

  // draw small face
  faceCtx.drawImage(
    // 5 source arguments - pulling out
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw arguments - drawing in to face canvas
    face.x, // where should we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );

  // draw small face back on, but scale up
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;

  faceCtx.drawImage(
    faceCanvas, // source
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    // drawing args
    // face.x * 1.35, // where should we start drawing the x and y?
    // face.y * 1.35,
    // face.width * 1.35,
    // face.height * 1.35
    face.x - (width - face.width), // where do we start the source pull from?
    face.y - (height - face.height),
    width,
    height,
  )

}

populateVideo().then(detect);

// Finished at 48 mins
