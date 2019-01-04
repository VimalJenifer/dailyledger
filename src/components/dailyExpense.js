import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import {bindActionCreators} from 'redux';
import * as Actions from '../action/submit';
import * as GENERAL from '../constants/general-constants';
import * as GENERAL_ENUM from '../constants/general-enum';
import { generateKeyPair } from 'crypto';
import DatePicker from 'react-datepicker';
import {renderExpense} from './expense';
import dropDownSelect from './dropDownSelect';



class DailyExpense extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {           
            startDate: new Date(),
            hasIncome: props,
            task: 'task'
        }    
    }    

    render() {        
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>      
                    
                    <Field
                    label={[GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.')}
                    name={[GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.')}
                    key={[GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.')}
                    component={renderField}
                    type="text"/>

                    <Field                        
                        label={GENERAL.CREDIT_DEBIT}
                        // name={[GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.')}
                        // key={[GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.')}
                        name= {this.state.task}
                        key={this.state.task}
                        component={dropDownSelect}
                        options={GENERAL_ENUM.task}
                    />                                      
                    
                    {this.props.hasIncome === 'income' ? 
                    <FieldArray
                        label={GENERAL.CREDIT}
                        name={[GENERAL.APP, GENERAL.CREDIT].join('.')}
                        component={renderExpense}
                    /> : <FieldArray
                    label={GENERAL.DEBIT}
                    name={[GENERAL.APP, GENERAL.DEBIT].join('.')}
                    component={renderExpense}
                    />                      }          

                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

DailyExpense = reduxForm({
    form: 'DailyExpense'
})(DailyExpense);

const mapStateToProps = (state) => ({
    userId: selector(state,[GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.')),
    task: selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.'))
});

const selector = formValueSelector('DailyExpense');
DailyExpense = connect(state => {
    const hasIncome = selector(state, 'task');
    const userId = selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.USER_ID].join('.'))
    const task = selector(state, [GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.'));    
    
    return {
        hasIncome,
        userId,
        task
    }
})(DailyExpense)

export default connect(mapStateToProps)(DailyExpense);

const renderField = ({input, label, type, meta: { touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error}}) => (
    <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? input.value: null}/>
        {touched && error && <span>{error}</span>}
    </div>
);

function getTaskOption() {
 
    return ("<option></option><option value='s'>s</option>");
}