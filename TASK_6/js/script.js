// let menItem = document.querySelectorAll('.menu-item');
// console.log(menItem[1]);

// let menu = document.querySelector('.menu');
// console.log(menu);

// menu.insertBefore(menItem[2], menItem[1]);

// let fiveElem = document.createElement('div');

// fiveElem.classList.add('menu-item');
// console.log(fiveElem);

// menu.appendChild(fiveElem);

// fiveElem.textContent = ('Пятый пункт');

// document.body.style.backgroundImage = 'url(http://127.0.0.1:5501/TASK_6/img/apple_true.jpg)';

// let columns = document.getElementsByClassName('column');
// console.log(columns);

// let tlt = document.getElementById('title');
// console.log(tlt);



// let elemIner = 'подлинную';
// let txtObj = tlt.textContent;

// txtObj = txtObj.replace(/ +/g, ' ').trim(); //убираем лишние пробелы

// console.log(txtObj);

// let newMass = txtObj.split(' ');

// // console.log(newMass);

// newMass.forEach(function(item, i, mass){
//     if (mass[i] == 'технику'){
//         mass.splice(i, 0, elemIner);
//     }
// });

// newMass.forEach(function(item, i, mass){
//     if (mass[i] == elemIner){
//         mass.splice(i, 1);
//     }
// });

// console.log(newMass);

// let finishNod = newMass.join(' ');
// console.log(finishNod);

// tlt.textContent = finishNod;

// console.log(tlt);

// let rekl = document.querySelector('.adv');
// console.log(rekl);

// columns[1].removeChild(rekl);


// let vopros = prompt('Расскажите как вы относитесь к технике Apple:');
// let otvet = document.getElementById('prompt');
// otvet.textContent = vopros;

adv = document.getElementsByClassName("adv")[0];
console.log(adv);