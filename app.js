const form = document.querySelector('.select-section');
let sort = document.querySelector('.sort-down');
let add = document.querySelector('.button');
let input = document.querySelector('input');

let arr = [];

sort.addEventListener('click', () => {
    if ( sort.value === "1") {
        sort.style.background = "url('" + "/img/up-black.svg" + "')";
        sort.value = "2";
    } else {
        sort.style.background = "url('" + "/img/down-black.svg" + "')";
        sort.value = "1";
    }
});

add.addEventListener('click', () => { 
    arr.push({text:input.value})
    addTask ()
});


function addTask (){
    let newTr = document.createElement('.clone-input');
    newTr.innerHTML = `${input.value}`;
    document.querySelector('.input-section').append(newTr);
};









