import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleOnSubmit = () => {
        event.preventDefault();
        console.log(`name ${this.state.value} is been submitted`);
    }

    handleOnChange = () => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        name: <input type="text" value={this.state.value} onChange={this.handleOnChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}


export default Form;