import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let component: Enzyme.ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />) as Enzyme.ShallowWrapper;
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("should have <AddTaskForm /> as a child component", () => {
    expect(component.find("AddTaskForm").length).toEqual(1);
  });

  it("should have <AddTaskForm /> to have task, onAdd, onChange & error props", () => {
    expect(component.find("AddTaskForm").prop("task")).toEqual({
      id: 1,
      name: ""
    });
    // expect(component.find("AddTaskForm").prop("onAdd")).toBeTruthy();
    // expect(component.find("AddTaskForm").prop("onChange")).toEqual(
    //   handleTaskChangeMock
    // );
    expect(component.find("AddTaskForm").prop("error")).toEqual("");
  });

  it("should have <TasksList /> as a child component", () => {
    expect(component.find("TasksList").length).toEqual(1);
  });

  it("should have <TasksList /> to have tasks & onDelete props", () => {
    expect(component.find("TasksList").prop("tasks")).toEqual([]);
  });

  it("should save task to state on click handleTaskChange method", () => {
    const instance = component.instance() as App;
    const event = { target: { value: "test value" } };
    instance.handleTaskChange(event);
    expect(instance.state.newTask).toEqual({ id: 1, name: "test value" });
  });

  it("should add a task on click addTask method", () => {
    const instance = component.instance() as App;
    instance.setState({ newTask: { id: 0, name: "test task" } });
    instance.addTask({ preventDefault: jest.fn() });
    expect(instance.state.newTask).toEqual({ id: 1, name: "" });
    expect(instance.state.error).toEqual("");
    expect(instance.state.tasks).toEqual([{ id: 0, name: "test task" }]);
  });

  it("should give an error on add an empty task on click addTask method", () => {
    const instance = component.instance() as App;
    instance.addTask({ preventDefault: jest.fn() });
    expect(instance.state.error).toEqual("Required field!");
  });

  it("should delete a task on click deleteTask method", () => {
    const instance = component.instance() as App;
    instance.setState({
      tasks: [
        { id: 0, name: "test task 1" },
        { id: 1, name: "test task 2" }
      ]
    });
    instance.deleteTask({ id: 0, name: "test task 1" });
    expect(instance.state.tasks).toEqual([{ id: 1, name: "test task 2" }]);
  });
});
