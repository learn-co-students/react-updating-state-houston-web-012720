// Code ClickityClick Component Here
import React , {Component} from 'react'

export default class ClickityClick extends Component{
    constructor() {
        super() 

        this.state = {
            hasBeenClick: false,
            currentTheme: 'blue'
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClick: !this.state.handleClick,
            currentTheme: 'blue'
        })
    }

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClick ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}