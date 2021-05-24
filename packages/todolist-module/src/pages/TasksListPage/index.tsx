import React, { useState } from "react";
import { TaskList } from "shared-types/src/types";

function TasksListPage() {
  const [taskList, setTaskList] = useState<TaskList[]>([
    { checked: false, content: "Example task" },
  ]);
  const [taskContentInput, setTaskContentInput] = useState("");

  function checkTaskListItem(selectedIndex: number) {
    setTaskList(
      taskList.map(
        (task, index): TaskList =>
          index === selectedIndex ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function addNewTask() {
    setTaskList((currentState) => [
      ...currentState,
      { checked: false, content: taskContentInput },
    ]);
    setTaskContentInput("");
  }

  function removeTask(indexToRemove: number) {
    setTaskList(taskList.filter((_item, index) => index !== indexToRemove));
  }

  return (
    <>
      <div>
        <input
          value={taskContentInput}
          onChange={(e) => setTaskContentInput(e.target.value)}
        />
        <button onClick={() => addNewTask()}>add</button>
      </div>
      <ul>
        {taskList.map((task, index) => (
          <li>
            <input
              type="checkbox"
              onChange={() => checkTaskListItem(index)}
              checked={task.checked}
            />
            <span>{task.content}</span>
            <button onClick={() => removeTask(index)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TasksListPage;
