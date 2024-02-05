function fetchPoll() {
    fetch('https://students.netoservices.ru/nestjs-backend/poll')
      .then(response => response.json())
      .then(data => displayPoll(data))
      .catch(error => console.error('Error fetching poll:', error));
  }
  
  function displayPoll(pollData) {
    const pollTitleElement = document.getElementById('poll__title');
    const pollAnswersElement = document.getElementById('poll__answers');
  
    pollTitleElement.textContent = pollData.data.title;

    pollAnswersElement.innerHTML = '';
  
    pollData.data.answers.forEach(answer => {
      const answerButton = document.createElement('button');
      answerButton.className = 'poll__answer';
      answerButton.textContent = answer;
      answerButton.addEventListener('click', () => handleAnswerClick(pollData.id, answer));
      pollAnswersElement.appendChild(answerButton);
    });
  }
  
  function handleAnswerClick(pollId, selectedAnswer) {
    alert('Спасибо, ваш голос засчитан за ответ: ' + selectedAnswer);
  }

  fetchPoll();
  
  
  function handleAnswerClick(pollId) {
    alert('Спасибо, ваш голос засчитан!');
  }