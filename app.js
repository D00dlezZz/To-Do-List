
let sort = document.querySelector('.sort-down');
let addBtn = document.querySelector('.button');
let section = document.querySelector('.input-section');
let clone = document.querySelector('.clone-input');
let task = document.querySelector('input');
let deleteBtn = document.querySelector('.delete');
let secInp = document.querySelector('.input-section');
let container = document.querySelector('.container');

let arr = [];
let order = 'up';
sort.addEventListener('click', () => {
    if (order === 'down') {
        order = 'up';
    } else {
        order = 'down';
    }
    sort.classList.toggle('sort-up');
    render();
});

addBtn.addEventListener('click', () => {
    workWithTasks();
});


function workWithTasks() {
    let addClone = clone.cloneNode(true);
    section.appendChild(addClone);
    addClone.querySelector('.input').value = "";
    addClone.querySelector('.delete').addEventListener('click', () => {
        addClone.remove();
    });
    deleteBtn.addEventListener('click', () => {
        clone.remove();
    });
};

function render() {
    let tasks = document.querySelectorAll('input');
    tasks.forEach((item) => {
        arr.push({ text: item.value });
    });
    arr.sort((a, b) => {

        if (order === "down") {
            if (a.text > b.text) {
                return 1;
            } else if (a.text < b.text) {
                return -1;
            }
        }
        if (order === "up") {
            if (a.text > b.text) {
                return -1;
            } else if (a.text < b.text) {
                return 1;
            }
        }
        return 0;
    });
    section.innerHTML = '';
    arr.forEach((item) => {
        let newInput = document.createElement('div');
        newInput.classList.add('clone-input');
        newInput.innerHTML = `<input class="input" value = "${item.text}"type="text"><button class="delete"></button>`;
        section.append(newInput);
        newInput.querySelector('.delete').addEventListener('click', () => {
            newInput.remove();
        });

    });
    arr = [];
};


