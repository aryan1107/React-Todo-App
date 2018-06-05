import React, { Component } from 'react';
import uuid from 'uuid';
import AppComponent from './Components/AppComponent';
import Task from './Components/Task';
import Toggle from './Components/Toggle';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      appComponent:[ ]
    }
  }

componentWillMount(){
    this.setState({appComponent: [
      {
        //UUID needed for delete option
        id:uuid.v4(),
        name: 'Doctors Appointment',
        description: 'Personal',
        status: <Toggle/>,
      },
      {
        id:uuid.v4(),
        name: 'Review Document',
        description: 'Work',
        status: <Toggle/>,
      },
      {
        id:uuid.v4(),
        name: 'GroceryShopping',
        description: 'Personal',
        status: <Toggle/>,
      },
      {
        id:uuid.v4(),
        name: 'Appointment 2',
        description: 'Personal',
        status: <Toggle/>,
      },
      {
        id:uuid.v4(),
        name: 'Review Document 2',
        description: 'Work',
        status: <Toggle/>,
      },
      {
        id:uuid.v4(),
        name: 'GroceryShopping 2',
        description: 'Personal',
        status: <Toggle/>,
      }


    ]});
}
handleTask(project){
  let appComponent = this.state.appComponent;
  appComponent.push(project);
  this.setState({appComponent:appComponent});

}

handleDeleteProject(id){
  let appComponent = this.state.appComponent;
  let index = appComponent.findIndex(x => x.id === id);
  appComponent.splice(index, 1);
  this.setState({appComponent:appComponent});
}

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Task task={this.handleTask.bind(this)}/>
          <AppComponent appComponent = {this.state.appComponent} onDelete={this.handleDeleteProject.bind(this)}/>
        </div>
      </div>
    );
  }
}



export default App;
