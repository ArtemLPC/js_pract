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

let qw1 = prompt('Введите обязательную статью расходов в этом месяце'),
    qw2 = prompt('Во сколько обойдется?'),
    qw3 = prompt('Введите обязательную статью расходов в этом месяце'),
    qw4 = prompt('Во сколько обойдется?');

    appData.expenses[qw1] = qw2;
    appData.expenses[qw3] = qw4;


    console.log(appData);

let oneDay = appData.bujet / 30;


alert('Ваш дневной лимит равен ' + oneDay);