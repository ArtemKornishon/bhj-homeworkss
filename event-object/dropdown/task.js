let drop = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list")
const arrLink = Array.from(document.querySelectorAll('.dropdown__link'));

drop.addEventListener('click', () => {
list.classList.toggle("dropdown__list_active");
});


for (let index = 0; index < arrLink.length; index++) {
    const item = arrLink[index].closest('.dropdown__item');
    item.onclick = () => {
       drop.textContent = arrLink[index].textContent;
       list.classList.remove('dropdown__list_active');
       return false;
    };
}