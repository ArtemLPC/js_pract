'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');


let appData = {
    bujet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

let oneDay = appData.bujet / 30;

appData.oneDay = oneDay;

console.log(appData);

 
alert('Ваш дневной лимит равен ' + appData.oneDay);

if (appData.oneDay < 100){
    alert('У вас очень маленький уровень достатка');
} else if (appData.oneDay > 100 && appData.oneDay < 300){
    alert('У вас средний уровень достатка');
} else if (appData.oneDay > 300) {
    alert('У вас высокий уровень достатка');
} else {
    alert('произошла ошибка');
}