import react, { Component } from 'react';
import {serverInfo} from '../../constants/general-constants';

export default function submit (values) {
    new Promise((resolve,reject) =>  {
        console.log("values", values)
        fetch(serverInfo.url+"Register1",{method: "get", body: JSON.stringify(values), mode: 'no-cors'})
        .then(res => res.json())
        .then(res => {
            if(res.hasOwnProperty("errors")) {
                reject(res.errors)
            } else {
                resolve (res.data)
            }
        })
    })
}

export function register(values) {
    console.log(serverInfo)
    fetch(serverInfo.register, {method: "GET", headers: {
        Accept: 'text/html',
    },
    // mode: 'no-cors'
})
    .then((response) => {
        return response.text()})
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

export function addExportOrIncome(values) {
    fetch()
}
