import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Register from './register';
import DailyExpense from './dailyExpense';
import Login from './login';
import { submit, register, addExpenseOrIncome } from '../redux/action/submit';
import IncomeOrExpense from '../redux/middleware/dailyExpenseService';
import _ from 'lodash';
import * as GENERAL from '../constants/general-constants'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'firstName',
      handleSubmit: props,
      login: false,
      register: false,
      dailyApplication: true,
      income: false,
      expense: false,
      viewPage:'login'
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
    return (
      <div>
        <div>          
          <ul className="list-group-horizontal col-sm-4">
            {this.renderGeneralMenu(GENERAL.GENERAL_MENU)}
            {this.renderGeneralMenu(GENERAL.USER_MENU)}
          </ul>                    
        </div>        
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

