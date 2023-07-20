let timerElement = document.getElementById('timer');
let counter = parseInt(timerElement.textContent);
const updateTimer = () => {
	counter--;
	timerElement.textContent = counter;

	if (counter <= 0) {
		clearInterval(timerInterval);
		alert('Вы победили в конкурсе!');
	}
}
let timerInterval = setInterval(updateTimer, 1000); //Запуск функции обновления каждую секунду