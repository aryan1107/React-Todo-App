import React, { Component } from 'react';


class TaskList extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <ul>
        {this.props.project.name} {this.props.project.status}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> Remove</a>
        <br/>
        {this.props.project.description}
       
      </ul>
    );
  }
}

export default TaskList;
