import React, { FunctionComponent } from "react";
import { Task } from "../../models/task";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
  error: string;
}

export const AddTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task,
  error
}) => (
  <>
    <form onSubmit={onAdd}>
      <input onChange={onChange} value={task.name} />
      <button type="submit">Add a task</button>
    </form>
    <small style={{ color: "red" }}>{error}</small>
  </>
);
