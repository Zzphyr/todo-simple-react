import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));

    console.log(tasksFromLocalStorage);

    if(tasksFromLocalStorage) {
      this.setState({ tasks: tasksFromLocalStorage });
    }
  }

  handleAddTask = (newTask) => {
    // we want to ADD to tasks, not replace them
    // hence we need a FUCNTION, not an obj in setSatte()
    this.setState(
      (state) => {
        // need to return the new state
        return {
          // passing all previous things in state
          ...state,
          tasks: [
            // passing all previous tasks
            ...state.tasks,
            // adding th new task
            newTask
          ]
        };
      },
      () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    );
  }

  handleToggleDone = (clickedTask) => {
    this.setState(
      (state) => {

        const updatedTasks = state.tasks.map((task) => {
          if(task.text === clickedTask.text) {
            // change is done
            task.isDone = !task.isDone;
          }
          return task;
        })

        return {
          ...state,
          tasks: updatedTasks
        }
      },
      () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    )
  }

  render() {
    return (
      <div className="App">
        <h1>My TODO's</h1>
  
        <TaskList tasks={this.state.tasks} onClickTask={this.handleToggleDone}/>
        <TaskInput onSubmit={this.handleAddTask}/>
      </div>
    );
  }
}

export default App;
