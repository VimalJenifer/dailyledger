import * as GENERAL from '../constants/general-constants';
import { serverInfo } from '../constants/general-constants';


/* export default function IncomeOrExpense(values) {
    if (values.task === 'income') {
        console.log("point to income action");        
    } else {
        console.log("point to expense action");
        console.log(values)
        fetch(
            serverInfo.addExpense,
            {
                method: "POST",
                headers: {
                    Accept: 'text/html',
                },
                // mode: 'no-cors'
            }
        )
        .then((response) => {
            return response.text()})
        .then((response) => {
            console.log("vimal");
            console.log(response);
        })
        .catch((error) => {
            console.error(error)
        })
    }
} */

export default function IncomeOrExpense1(values) {
    console.log(serverInfo)
    fetch(serverInfo.addExpense, {
        method: "POST", headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values.dailyExpense)
        // mode: 'no-cors'
    })
        .then((response) => {
            return response.text()
        })
        .then((response) => {
            console.log("vimal");
            console.log(response);
        })
        .catch((error) => {
            console.error(error)
        })
    console.log("success");
    console.log(values);
}