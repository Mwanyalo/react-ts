import React from "react";
import Enzyme, { shallow } from "enzyme";
import { AddTaskForm } from "./AddTaskForm";
import { Task } from "../../models/task";

describe("AddTaskForm component", () => {
  let component: Enzyme.ShallowWrapper;

  const onChangeMock = jest.fn();
  const onAddMock = jest.fn();
  let task: Task = { id: 0, name: "" };
  const error = "";

  beforeEach(() => {
    component = shallow(
      <AddTaskForm
        onChange={onChangeMock}
        onAdd={onAddMock}
        error={error}
        task={task}
      />
    ) as Enzyme.ShallowWrapper;
  });

  it("should render successfully", () => {
    expect(component.exists()).toBe(true);
  });

  it("should have a form tag", () => {
    expect(component.find("form").length).toEqual(1);
  });

  it("should have a input tag", () => {
    expect(component.find("input").length).toEqual(1);
  });

  it("should have a button tag", () => {
    expect(component.find("button").length).toEqual(1);
  });
});
