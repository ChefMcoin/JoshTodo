import React from "react";
import { TaskItemDone } from "./_partials/TaskListItemDone";
// import TaskItem from "./TaskItem";
// import { TaskItemDone } from "./TaskItemDone";

const DoneList = ({ doneTasks }) => {
  return (
    <div>
      <p className="text-white text-sm mb-2 mt-6">Done - {doneTasks.length}</p>
      <ul>
        {doneTasks.map((task) => (
          //   <TaskItem key={task.id} task={task} />
          // <TaskItem key={task.id} task={task} />

          //   <TaskItemDone task={task} />
          <TaskItemDone task={task} />

          // <li
          //   className="text-[#78CFB0] bg-[#15101C] px-3 py-2 mb-2 rounded-md"
          //   style={{ textDecoration: "line-through" }}
          // >
          //   {task.text}
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
