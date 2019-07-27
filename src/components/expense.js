import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as GENERAL from '../constants/general-constants';
import dropDownSelect from './dropDownSelect';
import * as GENERAL_ENUM from '../constants/general-enum';

export const renderExpense = ({ label, fields, meta: { error, submitFailed } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Add {label}
            </button>
        </li>
        {fields.map((expenses, index) => (
            <li key={index}>
                <button
                    type="button"                    
                    title={['Remove ', label].join('.')}
                    onClick={() => fields.remove(index)}
                >Remove {label}</button>
                <h4>{label} #{index + 1}</h4>
                <Field
                    label={GENERAL.CATEGORY}
                    name={[expenses, GENERAL.CATEGORY].join('.')}
                    key={[expenses, GENERAL.CATEGORY].join('.')}
                    component={renderField}
                    type="text" />
                    <Field
            className="col-sm-10"
            // name={[GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.')}
            // key={[GENERAL.APP, GENERAL.USER, GENERAL.TASK].join('.')}
            component={dropDownSelect}
            key='task1'
            label={GENERAL.CREDIT_DEBIT}
            name='task1'
            options={GENERAL_ENUM.task}
          />
                <Field
                    label={GENERAL.DESCRIPTION}
                    name={[expenses, GENERAL.DESCRIPTION].join('.')}
                    key={[expenses, GENERAL.DESCRIPTION].join('.')}
                    component={renderField}
                    type="text" />
                <Field
                    label={GENERAL.AMOUNT}
                    name={[expenses, GENERAL.AMOUNT].join('.')}
                    key={[expenses, GENERAL.AMOUNT].join('.')}
                    component={renderField}
                    type="text"
                />

            </li>
        ))}
    </ul>
);


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);