
document.addEventListener('DOMContentLoaded', function () {

const actionForm = document.getElementById('signin__form');

const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const getUser = localStorage.getItem('user_id');

if (getUser) {
    welcomeBlock.classList.add('welcome_active');
    userIdSpan.textContent = getUser;
    console.log(getUser)
}

actionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(actionForm);

    fetch ('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData,   
    })  .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id);
                userIdSpan.textContent = data.user_id;
                welcomeBlock.classList.add('welcome_active');
                document.getElementById('signin__form').reset();
            } else {
                alert('Неверный логин/пароль');
            }
    })
})
});