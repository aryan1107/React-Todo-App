import React, { Component } from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
      
      handleClick() {
            this.setState(prevState => ({
      		isToggleOn: !prevState.isToggleOn
       	}));
       }
  
    render() {
      return (
        
        <button class="btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? '✅' : '....'}
        </button>
        
      );
    }
  }

  export default Toggle;
