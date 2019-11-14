import React from "react";
import Enzyme, { shallow } from "enzyme";
import { TaskListItem } from "./TaskListItem";
import { Task } from "../../models/task";

describe("TaskListItem component", () => {
  let component: Enzyme.ShallowWrapper;

  const onDeleteMock = jest.fn();
  let task: Task = { id: 0, name: "test task" };

  beforeEach(() => {
    component = shallow(
      <TaskListItem onDelete={onDeleteMock} task={task} />
    ) as Enzyme.ShallowWrapper;
  });

  it("should render successfully", () => {
    expect(component.exists()).toBe(true);
  });

  it("should have an li element", () => {
    expect(component.find("li").length).toEqual(1);
    expect(component.find("li").text()).toEqual("test task X");
  });

  it("should have an button tag", () => {
    expect(component.find("button").length).toEqual(1);
    expect(component.find("button").text()).toEqual("X");
  });

  it("should delete task on click delete button", () => {
    component.find("button").simulate("click");
    expect(onDeleteMock.mock.calls).toEqual([[{ id: 0, name: "test task" }]]);
  });
});
