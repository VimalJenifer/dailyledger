import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import * as Actions from '../action/submit';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleSubmit: props
        }
    }

    render() {
        return(
        <div>
            <form onSubmit={this.props.handleSubmit}>
                <Field
                label="User I3d"       
                // name={this.state.userId}
                name= 'user.register.userId'
                // key={this.state.userId}
                key= 'user.register.userId'
                component={renderField}
                type="text"/>
                <Field
                label="email"       
                name={this.state.email}
                // name= 'user.register.email'
                key={this.state.email}
                // key= 'user.register.email'
                component={renderField}
                type="text"/>
                <Field
                label="Password"       
                name={this.state.password}
                key={this.state.password}
                component={renderField}
                type="password"/>    
                <button type="submit">submit</button>           
            </form>
        </div>
        );
    };
}

Register = reduxForm({
    form:'Register'
})(Register);

const mapStateToProps = (state) => ({
        register: state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const renderField = ({input, label, type, meta: { touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);