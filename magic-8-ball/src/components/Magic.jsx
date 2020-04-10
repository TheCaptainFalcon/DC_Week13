import React, { Component } from 'react';
import './Magic.css';

class Magic extends Component {
    state = {  
            question: '',
            answer: [],
            responseforCard: [],
        }

    handleChange = (event) => {
        this.setState({
            question: event.target.value
            
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch (`https://8ball.delegator.com/magic/JSON/${this.state.question}`);
        const data = await response.json();
        const obj = Object.keys(data).map(ob => 
            <div>{data[ob].answer}</div>)
        const objCardQ = Object.keys(data).map(objc1 => 
            <div>Question: {data[objc1].question} </div>
        )
        const objCardA = Object.keys(data).map(objc2 => 
            <div>Answer: {data[objc2].answer}</div>
        )
        const objCardT = Object.keys(data).map(objc3 => 
            <div>Type: {data[objc3].type} <p></p></div>
        )
        this.setState({
            answer: obj,
            responseforCard: [...this.state.responseforCard, objCardQ, objCardA, objCardT]

        });
    }

    render() { 

        return (  
            <div className='Magic'>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your greatest desire
                        <br></br>
                        <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.question}
                        placeholder="Enter your question"
                        />
                        <button type="submit">Submit</button>
                        <div className='Magic-Answer'>
                        <p>The Magic Ball says...{this.state.answer}</p>
                        </div>

                        <div className="Magic-History">
                            <p>History:</p>
                            {this.state.responseforCard}
                        </div>

                        
                    </label>
                </form>
            </div>
        );
    }
}
 
export default Magic;