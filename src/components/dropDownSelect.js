import React, {Component} from 'react';

class DropDownSelect extends Component {
    
    render() {
        const {input, label, options, meta: { touched, error}} = this.props;
        return (
            <div className="form-group">
                <div className="col-m-3">
                    {label}
                </div>
                <div className="col-m-3">
                    <select {...input} className="col-m-3">
                    <option></option>
                        {options.map((options) =>
                          <option key={options.label} value={options.value}>{options.value}</option>)}
                    </select>
                </div>
            </div>           
        );
    }

}

export default DropDownSelect;