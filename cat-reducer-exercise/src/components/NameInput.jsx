import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

class NameInput extends Component {
    state = {
        textInput: ''
    }

    handleChange = e => {
        this.setState({
            textInput: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { textInput } = this.state;
        this.props.setName(textInput)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} placeholder='New Name'/>
                <button type='submit'>Submit</button>
            </form>
        )
    }   
}

export default connect(
    null,
    { setName }
    )(NameInput);