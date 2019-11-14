import React from "react";
import Enzyme, { shallow } from "enzyme";
import { TasksList } from "./TasksList";
import { Task } from "../../models/task";

describe("TasksList component", () => {
  let component: Enzyme.ShallowWrapper;

  const onDeleteMock = jest.fn();
  let tasks: Task[] = [{ id: 0, name: "test task" }];

  beforeEach(() => {
    component = shallow(
      <TasksList onDelete={onDeleteMock} tasks={tasks} />
    ) as Enzyme.ShallowWrapper;
  });

  it("should render successfully", () => {
    expect(component.exists()).toBe(true);
  });
  it("should have ul element", () => {
    expect(component.find("ul").length).toEqual(1);
  });
  it("should have a <TaskListItem /> child component", () => {
    expect(component.find("TaskListItem").length).toEqual(1);
  });
  it("should have <TaskListItem />", () => {
    expect(component.find("TaskListItem").prop("task")).toEqual(tasks[0]);
    expect(component.find("TaskListItem").prop("onDelete")).toEqual(
      onDeleteMock
    );
  });
});
