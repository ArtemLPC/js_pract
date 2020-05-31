'use strict';

// let btn = document.getElementsByTagName('button')[1];
// console.log(btn);

// let wrap = document.querySelector('.wrapper');
// console.log(wrap);

// let link = document.querySelector('a');
// console.log(link);

// link.addEventListener('click', function(event){
//     event.preventDefault();
// });

// btn.addEventListener('click', function(event) {
//     console.log('Произошло собитие типа: ' + event.type + ' на элементе: ' + event.target);
// });

// wrap.addEventListener('click', function(event) {
//     console.log('Произошло собитие типа: ' + event.type + ' на элементе: ' + event.target);
// });

// btn.onclick = function(){
//     alert('Вы нажали вторую кнопку');
// }

// btn.onclick = function(){
//     alert('Вы снова нажали вторую кнопку');
// }

// btn.addEventListener('click', function(event){
//     console.log('Произошло событие: ' + event.type + ' на элементе: ' + event.target);
// })

// btn.addEventListener('click', function(event){
//     console.log('Произошло событие: ' + event.type + ' на элементе: ' + event.target);
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';
// })

// let btns = document.querySelectorAll('button');
// // console.log(btns);

// btns.forEach(function(item, i, mass){
//     item.addEventListener('mouseleave', function(event){
//         console.log('вышли за элемент номер - ' + (i+1) + ', который является кнопкой ' + item);
//     });
// });

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');
    // console.log(box);
    box.addEventListener('touchstart', function(event){
        console.log(event.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(event){
    //     event.preventDefault();
    //     console.log('touchend +');
    // });

    // box.addEventListener('touchmove', function(event){
    //     event.preventDefault();
    //     console.log('touchmovie +');
    // });

    // new RegExp('pattern','flags');
    // /pattern/flags

    // let ans = prompt('Введите число:');
    // let reg = /\d/g;
    // console.log(ans.match(reg));

    // // console.log(pass.replace(/./g, '*'));
    // alert('22-05-2020'.replace(/-/g, ':'));

    let test = 'My name is R2D2';
    console.log(test.match(/\w\d\w\d/ig));
});