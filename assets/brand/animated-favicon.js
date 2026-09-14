const favicon = document.getElementById("dynamic-favicon");

const frames = [
  "assets/brand/favicon-frames/1.png",
  "assets/brand/favicon-frames/2.png",
  "assets/brand/favicon-frames/3.png",
  "assets/brand/favicon-frames/4.png",
  "assets/brand/favicon-frames/5.png",
  "assets/brand/favicon-frames/6.png",
  "assets/brand/favicon-frames/7.png",
  "assets/brand/favicon-frames/8.png",
  "assets/brand/favicon-frames/9.png",
  "assets/brand/favicon-frames/10.png"
];

const durations = [180, 180, 180, 180, 180, 180, 220, 850];

let currentFrame = 0;
let timer = null;

frames.forEach((src) => {
  const image = new Image();
  image.src = src;
});

function animateFavicon() {
  favicon.href = frames[currentFrame];

  const delay = durations[currentFrame];
  currentFrame = (currentFrame + 1) % frames.length;

  timer = setTimeout(animateFavicon, delay);
}

animateFavicon();
