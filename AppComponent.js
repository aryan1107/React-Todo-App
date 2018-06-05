import React, { Component } from 'react';
import TaskList from './TaskList';

class AppComponent extends Component {  
  deleteProject(id){
    this.props.onDelete(id);
  } 
  render() {
    let taskLists;
    if(this.props.appComponent){
        taskLists = this.props.appComponent.map(project => {
         //console.log(project);
         return(
             <TaskList onDelete={this.deleteProject.bind(this)} key={project.name} button={project} project = {project}/>
         );
        });
    }

    return (
      <div className="AppComponentMain">
        <h3>My Todo List</h3>
        {taskLists}
 
      </div>
    );
  }
}

export default AppComponent;
