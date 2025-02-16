console.log('works but  it is still logging');

// this file didn't seem to reload as it wasn't updating in the browers, the change in the log above wasn't even coming through
// saving it as face2.js and then reloading the page in the browser and it worked


// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.


const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffc600';
ctx.lineWidth = 2;

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

// const faceDetector = new window.FaceDetector();
const faceDetector = new FaceDetector({ fastMode: true });


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
  // faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  // console.log({width, height, top, left}); // width: width, height: height, top: top, left: left - is what going {width, height, top, left} is doing
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(left, top, width, height);
}

populateVideo().then(detect);
console.log('stop');
