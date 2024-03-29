import React, { FunctionComponent } from "react";

import { Task } from "../../models/task";
import { TaskListItem } from "../TaskListItem/TaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TasksList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map(task => (
      <TaskListItem key={task.id} task={task} onDelete={onDelete} />
    ))}
  </ul>
);
