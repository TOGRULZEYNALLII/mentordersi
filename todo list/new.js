const input =document.querySelector('#todo-input');
const addbutton=document.querySelector('#add-todo');
const container =document.querySelector('#appenchilddiv');
const todoCount = document.querySelector('#todo-count');
// const p =document.querySelector('#p');


// dersde yazdigim kodlar 
let checkbox= document.querySelectorAll('.todo-item');
const activebutton = document.querySelector('#active');
const completedbutton = document.querySelector('#completed');
const clearbutton = document.querySelector('#clear-completed');
let count = 0;
const allbutton = document.querySelector('#all');

function containeraelaveet(){
    
    let iduniqiue=Date.now();
    let containeritem = document.createElement('div')
    containeritem.innerHTML=`    <div class="todo-item">
                                <input id="${iduniqiue}" type="checkbox">
                                 <label for="${iduniqiue}">${input.value}</label>
                                 </div>`
    container.appendChild(containeritem);
    localStorage.setItem(iduniqiue, input.value);
    count++;
    todoCount.textContent = `${count} item left`;
}

addbutton.addEventListener('click',containeraelaveet)

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== "") {
        containeraelaveet();
    }
});


container.addEventListener('click', (event) => {
    if (event.target.matches('.todo-item input[type="checkbox"]')) {
        if (event.target.checked) {
            event.target.parentElement.style.textDecoration = 'line-through';
            event.target.parentElement.style.color = 'gray';
        } else {
            event.target.parentElement.style.textDecoration = 'none';
            event.target.parentElement.style.color = 'black';
        }
    }
});


container.addEventListener('click', (event) => {
    if (event.target.matches('.todo-item input[type="checkbox"]')) {
        if (event.target.checked) {
            count--;
        } else {
            count++;
        }
    }
      todoCount.textContent = `${count} item left`;
});

activebutton.addEventListener('click', (event) => {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

completedbutton.addEventListener('click', (event) => {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});
allbutton.addEventListener('click', (event) => {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        item.style.display = 'block';
    });
});

clearbutton.addEventListener('click', (event) => {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.remove();
            localStorage.removeItem(checkbox.id);
        }
    });
    todoCount.textContent = `${count} item left`;
});



if(localStorage.length>0){
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let containeritem = document.createElement('div');
        containeritem.innerHTML=`<div class="todo-item">
                                 <input id="${key}" type="checkbox">
                                 <label for="${key}">${value}</label>
                                 </div>`;
        container.appendChild(containeritem);
        count++;
    }
    todoCount.textContent = `${count} item left`;
}