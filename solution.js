let task1 = document.getElementById('task1');
task1.innerText = `Changed using 'innerText'.`;

let task2 = document.getElementById('task2');
task2.innerHTML = (`<button type="button">Submit</button>`);

let task3 = document.body;
task3.style.backgroundColor = '#232323';

let items = document.getElementsByClassName('item');
console.dir(items);
for (let i = 0; i < items.length; i++) {
    items[i].style.border = 'solid';
}

let task5 = document.querySelector('#task5');
task5.href = 'https://www.springboard.com/';

let task6 = document.querySelector('#task6');
task6.value = 'DOM Master';

let task7 = document.querySelector('#task7');
task7.classList.add('new-class');

let btn = document.createElement("button");
btn.innerText = 'New';
document.querySelector('#task8').appendChild(btn);

let task9 = document.querySelector('#task9');
task9.parentNode.removeChild(task9);