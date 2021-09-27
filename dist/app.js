
let sort = document.querySelector('.sort-down');
let addBtn = document.querySelector('.button');
let section = document.querySelector('.input-section');
let clone = document.querySelector('.clone-input');
let task = document.querySelector('input');
let deleteBtn = document.querySelector('.delete');
let secInp = document.querySelector('.input-section');
let container = document.querySelector('.container');
let items = document.querySelectorAll('.clone-input');

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
    dragNdrop()
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
    items = document.querySelectorAll('.clone-input');
    dragNdrop()
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
    items = document.querySelectorAll('.clone-input');
    dragNdrop()
    arr = [];
};  

// Drag n drop

function dragNdrop() {

for (const task of items) {
  task.draggable = true;
}

section.addEventListener('dragstart', (event) => {
    event.target.classList.add('selected');
});

section.addEventListener('dragend', (event) => {
    event.target.classList.remove('selected');
});

let getNextElement = (cursorPosition, currentElement) => {
    let currentElementCoord = currentElement.getBoundingClientRect();
    let currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    let nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
};

section.addEventListener('dragover', (event) => {
    event.preventDefault();
  
    let activeElement = section.querySelector('selected');
    let currentElement = event.target;
    let isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains('clone-input');
    
  if (!isMoveable) {
    return;
  }
  
  let nextElement = getNextElement(event.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }
		
  section.insertBefore(activeElement, nextElement);
});
}
    

// Drag n drop

