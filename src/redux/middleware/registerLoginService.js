import * as GENERAL from '../../constants/general-constants';
import { serverInfo } from '../../constants/general-constants';
import * as formConstant from '../../constants/form-constants';

export default ({ getState, dispatch }) => (next) => (action) => {
    switch (action.type) {
        case "userLogin":
            dispatch(userLogin(getState()));
            next(action)
            break;
        default:
            next(action);
    }
    next(action);
}

export const userLogin = (values) => {
    let userLogin = {
        userName: _.get(values, [formConstant.formValues, formConstant.user, formConstant.login, formConstant.userId].join('.'), {}),
        password: _.get(values, [formConstant.formValues, formConstant.user, formConstant.login, formConstant.password].join('.'), {})
    }
    console.log(userLogin);
    let returnResponse = {};
    return (dispatch) => {
        fetch(serverInfo.url + serverInfo.login, {
            method: "POST", headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userLogin)
        }).then((response) => {
            return response.json();
        }).then((response) => {
            return dispatch({
                type: 'login_success',
                payload: response
            })
        })
    }
}