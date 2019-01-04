import React, {Component} from 'react';

class DropDownSelect extends Component {
    
    render() {
        const {input, label, options, meta: { touched, error}} = this.props;
        return (
            <div>
                <div>
                    {label}
                </div>
                <div>
                    <select {...input}>
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