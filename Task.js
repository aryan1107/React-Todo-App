import React, { Component } from 'react';
import TaskList from './TaskList';
import Toggle from './Toggle';
import uuid from 'uuid';

class Task extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Personal', 'Work', 'Other']
  }
  handlesubmit(e){
    if(this.refs.name.value === ''){
      alert('name is required');
    }else{
      this.setState({newProject:{
        id: uuid.v4(),
        name: this.refs.name.value,
        description: this.refs.description.value,
        status: <Toggle/>,
      }}, function(){
        console.log(this.state);
        //Sending state from task.js to App.js
        this.props.task(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  render() {
    let descriptionOptions = this.props.categories.map(description =>{
      return <option key={description} value={description}>{description}</option>
    });
    return (
      <div>
        <h3>Add New Todo</h3>
        <form onSubmit={this.handlesubmit.bind(this)}>
          <div>
            <input type="text" ref="name" placeholder="Task Name"/>
          </div> 
          <div class="field2">
            <label>Task Description</label><br />
            <div class="styled-select">
            <select ref="description">
              {descriptionOptions}
            </select>
            </div>
          </div> 
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default Task;
