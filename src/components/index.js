import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Register from './register';
import DailyExpense from './dailyExpense';
import Login from './login';
import { submit, register, addExpenseOrIncome } from '../action/submit';
import IncomeOrExpense from '../service/dailyExpenseService';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'firstName',
      handleSubmit: props,
      login: false,
      register: false,
      dailyApplication: true
    };
  }

  render() {
    return (
      <div>
        {(this.state.dailyApplication &&
        <DailyExpense onSubmit={values => IncomeOrExpense(values)} />
        )}
        {(this.state.register &&
        <Register onSubmit={values => register(values)} />
        )}
        {(this.state.login &&
        <Login onSubmit={values => IncomeOrExpense(values)} />
        )}
        <button onClick={() => this.setState({ login: !this.state.login, register: !this.state.register })}>Register</button>
      </div>
    );
  }
}

App = reduxForm({
  form: 'dailyExpense'
})(App);

function mapStateToProps(state) {
  return {
    app: state
  };
}
export default connect(mapStateToProps)(App);
// export default App;