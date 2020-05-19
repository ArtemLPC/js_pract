'use strict';

let startRasch = document.getElementById('start');
console.log(startRasch);

let budgetValue = document.getElementsByClassName('budget-value')[0];
console.log(budgetValue);

let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
console.log(daybudgetValue);

let levelValue = document.getElementsByClassName('level-value')[0];
console.log(levelValue);

let expensesValue = document.getElementsByClassName('expenses-value')[0];
console.log(expensesValue);

let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
console.log(optionalexpensesValue);

let incomeValue = document.getElementsByClassName('income-value')[0];
console.log(incomeValue);

let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
console.log(monthsavingsValue);

let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
console.log(yearsavingsValue);

let expensesItems = document.getElementsByClassName('expenses-item');
console.log(expensesItems);

let expensesItemBtn = document.getElementsByTagName('button')[0];
console.log(expensesItemBtn);

let optionalexpensesBtn = document.getElementsByTagName('button')[1];
console.log(optionalexpensesBtn);

let countBudgetBtn = document.getElementsByTagName('button')[2];
console.log(countBudgetBtn);

let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpensesItems);

let chooseIncome = document.querySelector('.choose-income');
console.log(chooseIncome);

let savings = document.querySelector('#savings');
console.log(savings);

let sum = document.querySelector('.choose-sum');
console.log(sum);

let percent = document.querySelector('.choose-percent');
console.log(percent);

let yearValue = document.querySelector('.year-value');
console.log(yearValue);

let monthValue = document.querySelector('.month-value');
console.log(monthValue);

let dayValue =document.querySelector('.day-value');
console.log(dayValue);








let money, time;
function start(){
    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
    
        time = prompt('Введите дату в формате YYYY-MM-DD');
}

start();

let appData = {
    bujet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let qw1 = prompt('Введите обязательную статью расходов в этом месяце'),
                qw2 = prompt('Во сколько Вам обойдется ' + qw1 + '?');
        
                if(typeof(qw1)==='string' && typeof(qw1) != null && typeof(qw2) != null && qw1 != "" && qw2 != "" && qw1.length < 50){
                    console.log('ok');
        
                    appData.expenses[qw1] = qw2;
                } else {
                    console.log('bed result');
                    i--;
                }
        }
    },
    detectDayBudget: function() {
        let oneDay = (appData.bujet/30).toFixed();
        appData.oneDay = oneDay;
        alert('Ваш дневной лимит равен ' + oneDay);
    },
    detectLevel: function() {
        if (appData.oneDay < 100){
            alert('У вас очень маленький уровень достатка');
        } else if (appData.oneDay > 100 && appData.oneDay < 300){
            alert('У вас средний уровень достатка');
        } else if (appData.oneDay > 300) {
            alert('У вас высокий уровень достатка');
        } else {
            alert('произошла ошибка');
        }
    },
    qwBySaving: function() {
        let qwSave = prompt('Скажите, у Вас есть сбережения?');
    if (qwSave == 'yes' && typeof(qwSave) != null && qwSave != '') {
        appData.savings = !!'true';
        //здесь вызвать функцию расчета процентов
        // raschProc();
        let sber,
        procSber;
    while (isNaN(sber) || sber == '' || sber == null) {
        sber = +prompt('Какая сумма находится на процентной ставке?');
    }
    while (isNaN(procSber) || procSber == '' || procSber == null) {
        procSber = +prompt('Под какой годовой процент ёпт?');
    }
        appData.monthIncome = (sber*procSber/100)/12;
        alert('Дружок, твой МЕСЯЧНЫЙ доход от бобла, которое лежит под процентами равен: ' + appData.monthIncome);
        if (appData.monthIncome >= 2000){
            alert('Братан, у тебя есть возможность нормально заработать');
        } else {
            alert('Братан, сорян, но ты не разбоготеешь...');
        }

    } else {
        
        let xxx;
        while (qwSave == xxx || qwSave == '') {
            alert('вы не ответили на вопрос');
            qwSave = prompt('Скажите, у Вас есть сбережения?');
        }
    }
    while (qwSave == 'no') {
        alert('Вы сказали у вас нет сбережений. Хуёво чё...');
        break;
    }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 4; i++){
            let a = prompt('Статья необязательных расходов?');
    
            if(typeof(a) === 'string' && typeof(a) != null && a != ''){
                console.log('done');
                appData.optionalExpenses[i] = a;
            }else {
                console.log('bed');
                i--;
            }
        }
    },
    chooseIncome: function() {
    // let items = 'sdfte, 12, hjk';
    let items = prompt('Что приносит вам дополнительный доход? (перечислите через запятую)');
    while (items == null) {
        items = prompt('Нахуя нажал "отменить"? Ответь на вопрос - что приносит тебе дополнительный доход?!');
    }
    let arr = items.split(', ');
    let bulProv = true;
    // console.log(arr);
    for(let key in arr) {
        let prov = +arr[key];
        // console.log(prov);
        let x = !!prov;
        // console.log(x);
        let z = true;
        let y = (x == z);
        if (y === false && arr[key] != ' ' && arr[key] != '' && arr[key] != null && items != null) {
            console.log('ok');
            bulProv = bulProv*true;
        } else {
            console.log('hui');
            bulProv = bulProv*false;
        }
    }
        console.log(bulProv);
        if (bulProv == 1) {
            appData.income = arr;
        } else {
            alert('введите только текстовые значения и только через запятую! Например: фриланс, подработка, продажи');
            appData.chooseIncome();
        }
        console.log(appData);

        appData.income.forEach(function(item, i, mass) {
            let nachSchetch = 1;
            alert('Способы доп. заработка: ' + (nachSchetch + i) + ' - ' + item);
        });

        appData.income.push(prompt('Ничего не забыл?'));

    }
};



    console.log('Наша программа включает в себя данные: ');
    for (let key in appData) {
        if (typeof(appData[key]) == 'function') {
            console.log('Метод: ' + key);
        } else {console.log(key);}
        
    }

    
// let i = 0;
// while (i < 2) {
//     let qw1 = prompt('Введите обязательную статью расходов в этом месяце'),
//         qw2 = prompt('Во сколько Вам обойдется ' + qw1 + '?');

//         appData.expenses[qw1] = qw2;
//         i++;
// }

    //  do{
    //     let qw1 = prompt('Введите обязательную статью расходов в этом месяце'),
    //     qw2 = prompt('Во сколько Вам обойдется ' + qw1 + '?');

    //     appData.expenses[qw1] = qw2;
    //     i++;
    //  } while (i < 2);




// let oneDay = appData.bujet / 30;
// appData.oneDay = oneDay;
// alert('Ваш дневной лимит равен ' + appData.oneDay);







// function qwBySaving() {
//     let qwSave = prompt('Скажите, у Вас есть сбережения?');
//     if (qwSave == 'yes' && typeof(qwSave) != null && qwSave != '') {
//         appData.savings = !!'true';
//         //здесь вызвать функцию расчета процентов
//         // raschProc();
//         let sber,
//         procSber;
//     while (isNaN(sber) || sber == '' || sber == null) {
//         sber = +prompt('Какая сумма находится на процентной ставке?');
//     }
//     while (isNaN(procSber) || procSber == '' || procSber == null) {
//         procSber = +prompt('Под какой годовой процент ёпт?');
//     }
//         appData.monthIncome = (sber*procSber/100)/12;
//         alert('Дружок, твой МЕСЯЧНЫЙ доход от бобла, которое лежит под процентами равен: ' + appData.monthIncome);
//         if (appData.monthIncome >= 2000){
//             alert('Братан, у тебя есть возможность нормально заработать');
//         } else {
//             alert('Братан, сорян, но ты не разбоготеешь...');
//         }

//     } else {
        
//         let xxx;
//         while (qwSave == xxx || qwSave == '') {
//             alert('вы не ответили на вопрос');
//             qwSave = prompt('Скажите, у Вас есть сбережения?');
//         }
//     }
//     while (qwSave == 'no') {
//         alert('Вы сказали у вас нет сбережений. Хуёво чё...');
//         break;
//     }
// }




// function raschProc() {
//     let sber,
//         procSber;
//     while (isNaN(sber) || sber == '' || sber == null) {
//         sber = +prompt('Какая сумма находится на процентной ставке?');
//     }
//     while (isNaN(procSber) || procSber == '' || procSber == null) {
//         procSber = +prompt('Под какой годовой процент ёпт?');
//     }
//         appData.monthIncome = (sber*procSber/100)/12;
//         alert('Дружок, твой МЕСЯЧНЫЙ доход от бобла, которое лежит под процентами равен: ' + appData.monthIncome);
//         if (appData.monthIncome >= 2000){
//             alert('Братан, у тебя есть возможность нормально заработать');
//         } else {
//             alert('Братан, сорян, но ты не разбоготеешь...');
//         }
// }