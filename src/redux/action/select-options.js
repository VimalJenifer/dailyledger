import { serverInfo } from '../../constants/general-constants';

export function getExpenseOption(values) {    
    const request = fetch(serverInfo.getExpenseOption, { method: "get", mode: 'no-cors' })
        .then(res => {
            if (res.hasOwnProperty("errors")) {
                reject(res.errors)
            }
        })
    return {
        type: "getExpenseOption",
        payload: request
    }
}