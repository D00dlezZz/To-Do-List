
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
        render();
    } else {
        sort.style.background = "url('" + "/img/down-black.svg" + "')";
        sort.value = "1";   
    }
});

addBtn.addEventListener('click', () => {
    workWithTasks();
});


function workWithTasks() {
    let addClone = clone.cloneNode(true);
    section.appendChild(addClone);
    addClone.querySelector('.delete').addEventListener('click', () => {
        addClone.remove();
    });
    deleteBtn.addEventListener('click', () => {
        clone.remove();
    });
    task.value = "";
}

function render() {
    let tasks = document.querySelectorAll('input');
    tasks.forEach((item) => {
        arr.push({text:item.value});
    });
    arr.sort((a, b) => {
        if (a.text > b.text) {
            return 1;
        } else if (a.text < b.text) {
            return -1;
        } 
        return 0;
    });
    console.log(arr);

    section.innerHTML = '';
    arr.forEach((item) => {
        let newInput = document.createElement('div');
        newInput.classList.add('clone-input');
        newInput.innerHTML = `<input class="input" value = "${item.text}"type="text"><button class="delete"></button>`;
        section.append(newInput);
    });
    arr = [];
}


