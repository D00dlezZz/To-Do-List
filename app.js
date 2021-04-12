
let sort = document.querySelector('.sort-down');
let addBtn = document.querySelector('.button');
let task = document.querySelector('input');
let section = document.querySelector('.input-section');
let clone = document.querySelector('.clone-input');
let deleteBtn = document.querySelector('.delete');

let arr = [];
console.log(sort);
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
    console.log(arr);
    addTask();
});


function addTask() {
    arr.push({ text: task.value })
    let addClone = clone.cloneNode(true);
    section.appendChild(addClone);
    addClone.querySelector('.delete').addEventListener('click', () => {
        addClone.remove();
    });
    task.value = "";
    console.log(section);
}

deleteBtn.addEventListener('click', (event) => {
    event.target.parentElement.remove();
});











