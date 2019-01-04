import React, {Component} from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as GENERAL from '../constants/general-constants';

export const renderExpense = ({label, fields, meta: {error, submitFailed}}) => (
    <ul>
        <li>
            <button type="button" onClick={()=> fields.push({})}>
                Add {label}
            </button>
        </li>
        {fields.map((expenses, index) => (
            <li key={index}>
                <button
                    type="button"
                    title={['Remove ', label].join('.')}
                    onClick={()=> fields.remove(index)}
                />
                <h4>{label} #{index +1}</h4>
                <Field
                    label={GENERAL.CATEGORY}
                    name={[expenses, GENERAL.CATEGORY].join('.')}
                    key={[expenses, GENERAL.CATEGORY].join('.')}
                    component={renderField}
                    type="text"/>
                <Field
                    label={GENERAL.DESCRIPTION}
                    name={[ expenses, GENERAL.DESCRIPTION].join('.')}
                    key={[ expenses, GENERAL.DESCRIPTION].join('.')}
                    component={renderField}
                    type="text"/>
                <Field
                    label={GENERAL.AMOUNT}
                    name={[ expenses, GENERAL.AMOUNT].join('.')}
                    key={[ expenses, GENERAL.AMOUNT].join('.')}
                    component={renderField}
                    type="text"
                />

            </li>
        ))}
    </ul>
);


const renderField = ({input, label, type, meta: { touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);