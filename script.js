const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decreaseBtn = document.getElementById('decrease'),
      sizeEl = document.getElementById('size'),
      increaseBtn = document.getElementById('increase'),
      colorEl = document.getElementById('color'),
      clear = document.getElementById('clear');

let size = sizeEl.innerHTML;
let isPressed = false;
let color = '#000000';
let x, y;

canvas.addEventListener('mousedown', e => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', e => {
    isPressed = false;

    x = '';
    y = '';
});

canvas.addEventListener('mousemove', e => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

decreaseBtn.addEventListener('click', () => {
    if (size <= 1) {
        size = 1;
    } else {
        size = +size - 3;
    }

    sizeEl.innerText = size;
});

increaseBtn.addEventListener('click', () => {
    if (size >= 31) {
        size = 31;
    } else {
        size = +size + 3;
    }

    sizeEl.innerText = size;
});

colorEl.addEventListener('input', () => {
    color = colorEl.value;
});

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));