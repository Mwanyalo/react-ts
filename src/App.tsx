import React, { Component } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TasksList } from "./components/TasksList/TasksList";

import { Task } from "./models/task";

interface State {
  newTask: Task;
  tasks: Task[];
  error: string;
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: [],
    error: ""
  };

  addTask = (event: any) => {
    event.preventDefault();
    if (this.state.newTask.name !== "") {
      this.setState(previousState => ({
        newTask: {
          id: previousState.newTask.id + 1,
          name: ""
        },
        error: "",
        tasks: [...previousState.tasks, previousState.newTask]
      }));
    } else {
      this.setState({ error: "Required field!" });
    }
  };

  handleTaskChange = (event: any) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };

  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <AddTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
          error={this.state.error}
        />

        <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
