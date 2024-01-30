const addButton = document.querySelector('.tasks__control')
const tasksList = document.querySelector('.tasks__list')
const inputText = document.getElementById('task__input')

addButton.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask()
});

tasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
      const taskElement = event.target.parentElement;
      removeTaskFromDOM(taskElement);
    }
  });

function addTask(){

if (document.getElementById('task__input').value === '') {
    alert('Напечатайте задачу')
}
else {
    let newTask = document.createElement('div');
    

    newTask.classList.add('task')
    
    tasksList.insertAdjacentElement('beforeend', newTask)
    
    newTask.innerHTML += 
    `
    <div class="task__title">
    ${inputText.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;
    inputText.value = "";
    }
}

  function removeTaskFromDOM(taskElement) {
    taskElement.remove();  
}