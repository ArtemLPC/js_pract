'use strict';

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
    savings: false
};

 function chooseExpenses(){
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
 }
chooseExpenses();

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

let days = 30;

function detectDayBudget(a,b){
    let oneDay = (a/b).toFixed();
    appData.oneDay = oneDay;
    alert('Ваш дневной лимит равен ' + oneDay);
}
detectDayBudget(appData.bujet,days);

console.log(appData);

// let oneDay = appData.bujet / 30;
// appData.oneDay = oneDay;
// alert('Ваш дневной лимит равен ' + appData.oneDay);


function detectLevel(a){
if (a < 100){
    alert('У вас очень маленький уровень достатка');
} else if (a > 100 && a < 300){
    alert('У вас средний уровень достатка');
} else if (a > 300) {
    alert('У вас высокий уровень достатка');
} else {
    alert('произошла ошибка');
}
}

detectLevel(appData.oneDay);




function qwBySaving() {
    let qwSave = prompt('Скажите, у Вас есть сбережения?');
    if (qwSave == 'yes' && typeof(qwSave) != null && qwSave != '') {
        appData.savings = !!'true';
        //здесь вызвать функцию расчета процентов
        raschProc();

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
}
qwBySaving();
console.log(appData);



function raschProc() {
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
}

console.log(appData);





function chooseOptExpenses(){
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
}
console.log(appData);
chooseOptExpenses();