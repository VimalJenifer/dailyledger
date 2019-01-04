import * as GENERAL from '../constants/general-constants';


export default function IncomeOrExpense(values) {
    if (values.task === 'income') {
        console.log("point to income action");        
    } else {
        console.log("point to expense action");
        console.log(values)
        fetch(
            serverInfo.register,
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
}