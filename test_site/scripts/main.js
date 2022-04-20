/* let myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = '侯顺勇';
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}

/* let myVariable = document.querySelector('h2');
alert('hello!'); */

/* document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}  */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/001.png') {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    } else {
      myImage.setAttribute('src', 'images/001.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '故宫游 酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}