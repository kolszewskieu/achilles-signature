import React, { Component } from 'react';

class Input extends Component {
    
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    handleFocus(event) {
        /* global setTimeout */
        // Timeout added to fix flaky selection persistence on Chrome
        setTimeout(function () {
            this.select();
        }.bind(event.target), 1);
    }

    render() {
        return( 
        <div>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input
                id={this.props.id}
                //onFocus={this.handleFocus}
                name={this.props.name}
                title={this.props.label}
                type={this.props.type}
                value={this.props.value}
                onChange={this.handleChange}
            />
        </div>);
    }

}

export default Input;