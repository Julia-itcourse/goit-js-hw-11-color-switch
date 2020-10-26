const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorChange = () => {
  const randomBgColor = colors[randomIntegerFromInterval(0, colors.length)];
  refs.body.style.backgroundColor = `${randomBgColor}`;
};

const stopColorChange = () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }
};

refs.startBtn.addEventListener('click', () => {
  console.log('startBtn');
  timerId = setInterval(colorChange, 1000);
  refs.startBtn.disabled = true;
  refs.startBtn.style.backgroundColor = 'gray';
});

refs.stopBtn.addEventListener('click', () => {
  stopColorChange();
  refs.startBtn.disabled = false;
  refs.startBtn.style.backgroundColor = '#8add7f';
});
