import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as Actions from '../action/submit';
import * as GENERAL from '../constants/general-constants'

class ExpenseMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ol>
                    <li onClick={}>expense</li>
                    <li>income</li>
                </ol>
            </div>
        );
    }
}

ExpenseMenu = reduxForm({
    form: 'ExpenseMenu'
})(ExpenseMenu);

const mapStateToProps = (state) => ({
    Login: state,
    userId: _.get(state, [GENERAL.USER, GENERAL.LOGIN, GENERAL.USER_ID].join('.'))
});

export default connect(mapStateToProps)(ExpenseMenu);
