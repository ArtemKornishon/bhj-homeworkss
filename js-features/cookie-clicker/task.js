const cookieElement = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter')

let count = 0;
let cookieSize = 200;
let isDecreasing = false;

cookieElement.onclick = () => {
    count++;
    clickerCounter.textContent = count;

	if (isDecreasing) {
		cookieSize += 10;
		isDecreasing = false;
	} else {
		cookieSize -= 10;
		isDecreasing = true;
	}

	cookie.style.width = `${cookieSize}px`;
	cookie.style.height = "auto";
	cookie.style.maxHeight = `${cookieSize}px`;
};