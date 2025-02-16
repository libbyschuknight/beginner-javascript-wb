import { hslToRgb } from './utils.js';

const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
// ctx.lineWidth = 2;
// ctx.strokeStyle = 'white';
// ctx.lineCap = 'round';
// ctx.filter = 'blur(10px)';
// const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);

let analyser;
let bufferLength;

function handleError(err) {
  console.log('You must give access to your mic in order to proceed');
  console.log(err);
}

function drawTimeData(timeData) {
  // inject the time data into our timeData array
  analyser.getByteTimeDomainData(timeData);
  // now that we have the data lets turn it into something visual
  // 1. clear the canvas todo
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // 2. setup some canvas drawing
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ffc600';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;

  let x = 0;
  // loop over the timeData and for each data point
  // draw a line to the canvas
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // draw our line
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });

  ctx.stroke();

  // call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
  // get the frequency data into our frequencyData array
  analyser.getByteFrequencyData(frequencyData);
  requestAnimationFrame(() => drawFrequency(frequencyData));

  // figure out the bar width
  const barWidth = (WIDTH / bufferLength) * 2.5;
  let x = 0;
  frequencyData.forEach((amount, i) => {
    // 0 to 255
    const percent = amount / 255;
    // const [h, s, l] = [360 / (i + 10), 100, 50];
    const [h, s, l] = [360 / (percent * 360) - 0.5, 0.8, 0.5];

    const barHeight = (HEIGHT * percent) / 2;
    // convert the color to HSL
    const [r, g, b] = hslToRgb(h, s, l);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    // ctx.fillStyle = `hsl(${h}, ${s}%, ${l}%)`; // does not work yet
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 2;
  });
}

async function getAudio() {
  const stream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .catch(handleError);
  const audioCtx = new AudioContext();
  analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyser);
  // how much data should we collect
  analyser.fftSize = 2 ** 10;
  // pull the data off the audio
  // how many pieces of data are there?
  bufferLength = analyser.frequencyBinCount;
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

getAudio();
