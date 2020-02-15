import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Register from './register';
import DailyExpense from './dailyExpense';
import Login from './login';
import { submit, register, addExpenseOrIncome } from '../redux/action/submit';
import IncomeOrExpense from '../redux/middleware/dailyExpenseService';
import { userLogin } from '../redux/middleware/registerLoginService';
import _ from 'lodash';
import * as GENERAL from '../constants/general-constants'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'firstName',
      handleSubmit: props,
      login: true,
      register: false,
      dailyApplication: false,
      income: false,
      expense: false,
      viewPage: 'login'
    };
    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(pageName) {
    this.setState({
      viewPage: pageName
    });
  }

  renderGeneralMenu(menuType) {
    return menuType.map(menu => {
      return (
        <li
          className='list-group-item'
          key={menu.title}
          onClick={() => this.selectPage(menu.value)}
        >
          {menu.value}
        </li>
      );
    });
  }

  render() {
    let { isLoggedIn } = this.props;
    return (
      <div>
        <div>
          <ul className="list-group-horizontal col-sm-4">
            {this.renderGeneralMenu(GENERAL.GENERAL_MENU)}
            {this.renderGeneralMenu(GENERAL.USER_MENU)}
          </ul>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            {(isLoggedIn &&
              <DailyExpense onSubmit={values => IncomeOrExpense(values)} />
            )}
            {(this.state.register &&
              <Register onSubmit={values => register(values)} />
            )}
            {(!isLoggedIn &&
              <Login />
            )}
            <button onClick={() => this.setState({ login: !this.state.login, register: !this.state.register })}>Register</button>
          </div>
        </form>
      </div>
    );
  }
}

App = reduxForm({
  form: 'dailyExpense'
})(App);

function mapStateToProps(state) {
  return {
    app: state,
    isLoggedIn: _.get(state, ['data', 'isLoggedIn'].join('.'))
  };
}

function mapDispatchToProps(dispatch) {


  return ({
    userLogin: values => {
      dispatch({ type: 'userLoginSuccess', payload: userLogin(values) })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

