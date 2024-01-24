let list = document.getElementById('list');
let button = document.getElementById('button');
button.onclick = function () {
    let input = document.getElementById('input').value;
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }