import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import * as Actions from '../action/submit';
import * as GENERAL from '../constants/general-constants'
import { generateKeyPair } from 'crypto';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: 'firstName'
        }     
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        Hi               
                    </div>
                    <Field
                    label={[GENERAL.USER, GENERAL.LOGIN, GENERAL.USER_ID].join('.')}
                    name={[GENERAL.USER, GENERAL.LOGIN, GENERAL.USER_ID].join('.')}
                    key={[GENERAL.USER, GENERAL.LOGIN, GENERAL.USER_ID].join('.')}
                    component={renderField}
                    type="text"/>
                    <Field
                    label={[GENERAL.USER, GENERAL.LOGIN, GENERAL.PASSWORD].join('.')}
                    name={[GENERAL.USER, GENERAL.LOGIN, GENERAL.PASSWORD].join('.')}
                    key={[GENERAL.USER, GENERAL.LOGIN, GENERAL.PASSWORD].join('.')}
                    component={renderField}
                    type="password"/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

Login = reduxForm({
    form: 'Login'
})(Login);

const mapStateToProps = (state) => ({
    Login: state,
    userId: _.get(state,[GENERAL.USER, GENERAL.LOGIN, GENERAL.USER_ID].join('.'))
})

export default connect(mapStateToProps)(Login);

const renderField = ({input, label, type, meta: { touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);