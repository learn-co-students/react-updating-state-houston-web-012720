import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    //   const newbeenclicked = this.state.hasBeenClicked
    // this.setState({hasBeenClicked: !newbeenclicked})
    this.setState((previouse) => {
        return {hasBeenClicked: !previouse.hasBeenClicked}
    })
  };

  

 
  render() {
    return (
      <div>  
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 

