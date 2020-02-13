
export const serverInfo = {
    url: 'http://localhost:8080/DailyExpense',
    register: 'http://localhost:8080/DailyExpense/Register1',
    login: '/Login',
    // addExpense: "http://localhost:8080/DailyExpense/addExpense",
    addExpense: "https://dailyexpenserestapi.herokuapp.com/DailyExpense/addExpense",
    addIncome: "http://localhost:8080/DailyExpense/addIncome",
    getExpenseOption: "http://localhost:8080/DailyExpense/getExpenseOption"


}

export const user = {
    register : {
        USER_ID: 'userId',
        EMAIL: 'email',
        PASSWORD: 'password'
    }, login: {
        USER_ID: '',
        PASSWORD: ''
    }
}

export const APP= 'dailyExpense';

export const USER = 'user';

export const REGISTER= 'register';

export const LOGIN= 'login';

export const USER_ID= 'userId';
export const EMAIL= 'email';
export const PASSWORD= 'password';

export const CREDIT_DEBIT = 'expense Or income';

export const TASK= 'task';

export const DEBIT= 'expense';

export const CREDIT= 'income';

export const REASONS= 'reasons';

export const CATEGORY= 'category';
export const DESCRIPTION= 'description';

export const AMOUNT= 'amount';

export const GENERAL_MENU = [
    {title:'login', value: 'login'},
    {title:'register', value: 'register'}
];

export const USER_MENU = [
    {title: 'transaction', value: 'transaction'},
    {title: 'history', value:'history'},
    {title: 'profile', value: 'profile'}
];