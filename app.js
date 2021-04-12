
let sort = document.querySelector('.sort-down');
let addBtn = document.querySelector('.button');
let section = document.querySelector('.input-section');
let clone = document.querySelector('.clone-input');
let task = document.querySelector('input');
let deleteBtn = document.querySelector('.delete');
let secInp = document.querySelector('.input-section');
let container = document.querySelector('.container');

let arr = [];

sort.addEventListener('click', () => {
    if (sort.value === "1") {
        sort.style.background = "url('" + "/img/up-black.svg" + "')";
        sort.value = "2";
    } else {
        sort.style.background = "url('" + "/img/down-black.svg" + "')";
        sort.value = "1";
    }
});

addBtn.addEventListener('click', () => {
    workWithTasks();
});


function workWithTasks() {
    arr.push({ text: task.value });
    console.log(arr);
    let addClone = clone.cloneNode(true);
    section.appendChild(addClone);
    addClone.querySelector('.delete').addEventListener('click', () => {
        addClone.remove();
    });
    deleteBtn.addEventListener('click', () => {
        clone.remove();
    });
    task.value = "";
    container.style.height = "1%";
    secInp.style.height = "1%";
}














