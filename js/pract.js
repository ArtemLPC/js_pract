'use strict';

// let arr = [3, 1, 2, 5, 13];

// let i = arr.sort(proverkaRaznici);

// console.log(i);

// function proverkaRaznici (a, b) {
//     return a-b;
// }




// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function suka (obj){
//      for (let key in obj) {
//          if (typeof(obj[key]) === 'number') {
//            console.log('ok');
//            obj[key]=obj[key]*2;
//          } else {}
//      }
//   }
//   suka(menu);
// console.log(menu);


let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart');
let oneHeart = document.querySelector('.heart');
let wrapper = document.querySelector('.wrapper');

console.log(box);
console.log(btn);
console.log(btn[2]);
console.log(circle);
console.log(circle[0]);
console.log(heart);
console.log(heart[2]);
console.log(oneHeart);
console.log(wrapper);

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, mass){
//     item.style.backgroundColor = 'green';
// });

let elemDiv = document.createElement('div');
let txtNode = document.createTextNode('Hello World');

elemDiv.classList.add('black');

// document.body.appendChild(elemDiv);

// console.log(elemDiv);

// wrapper.appendChild(elemDiv);

document.body.insertBefore(elemDiv, circle[0]);

document.body.removeChild(circle[0]);

wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

elemDiv.textContent = 'Hello world!';

box.textContent = 'Hi people';