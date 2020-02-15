import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import {getExpenseOption} from '../redux/action/select-options';
import * as GENERAL from '../constants/general-constants';
import * as FORMCONSTANT from '../constants/form-constants';
import * as GENERAL_ENUM from '../constants/general-enum';
import { generateKeyPair } from 'crypto';
import DatePicker from 'react-datepicker';
import { renderExpense } from './expense';
// import moment from 'moment';
import dropDownSelect from './dropDownSelect';

const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
  <div>
    <div className={className}>
      <label>{label}</label>
    </div>
    <div className={className}>
      <input
        {...input}
        className={className}
        placeholder={label}
        type={type}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class DailyExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      hasIncome: props,
      task: 'task'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  componentDidMount() {
    this.props.getExpenseOption();
  }

  render() {
    return (
      <div>

          <Field
            className="col-m-10"
            component={renderField}
            key={[GENERAL.USER, FORMCONSTANT.login, GENERAL.USER_ID].join('.')}
            label={GENERAL.USER_ID}
            name={[GENERAL.USER, FORMCONSTANT.login, GENERAL.USER_ID].join('.')}
            type="text"
          />

          {/* <Field
            component={renderDatePicker}
            key={[GENERAL.APP, GENERAL.USER, 'today'].join('.')}
            label={'today'}
            name={[GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.')}
            selected={this.state.startDate}
            onChange={this.handleChange}
          /> */}

          <DatePicker
            className="form-control dateInput"
            dropdownMode="select"
            key={[FORMCONSTANT.actionDate].join('.')}
            name={[FORMCONSTANT.actionDate].join('.')}
            onChange={this.handleChange}
            selected={this.state.startDate}
            showMonthDropdown
          />

          <Field
            className="col-sm-10"
            // name={[GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.')}
            // key={[GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.')}
            component={dropDownSelect}
            key={this.state.task}
            label={GENERAL.CREDIT_DEBIT}
            name={this.state.task}
            options={GENERAL_ENUM.task}
            onChange={this.props.getExpenseOption}
          />

          {this.props.hasIncome === 'income' ?
            <FieldArray
              component={renderExpense}
              label={GENERAL.CREDIT}
              name={[GENERAL.APP, GENERAL.CREDIT].join('.')}
            /> : <FieldArray
              component={renderExpense}
              label={GENERAL.DEBIT}
              name={[GENERAL.APP, GENERAL.DEBIT].join('.')}
            />}

          <button
            color="primary"
            type="submit"
          >Submit</button>

      </div>
    );
  }  
}

DailyExpense.propTypes = {
    
}

const mapStateToProps = (state) => ({
  userId: selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.')),
  task: selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.'))
});

const selector = formValueSelector('DailyExpense');
DailyExpense = connect(state => {
  const hasIncome = selector(state, 'task');
  const userId = selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.'));
  const task = selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.'));

  return {
    hasIncome,
    userId,
    task
  };
})(DailyExpense);

export default connect(mapStateToProps, {getExpenseOption})(DailyExpense);

const renderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
  <div className="form-group">
    <DatePicker
      {...input}
      dateFormat="LLL"
      selected={input.value ? input.value : null}
      showMonthDropdown />
    {touched && error && <span>{error}</span>}
  </div>
);

function getTaskOption() {
  return ("<option></option><option value='s'>s</option>");
}
