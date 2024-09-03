import React from "react";
import { TaskItemDone } from "./_partials/TaskListItemDone";

const DoneList = ({ doneTasks }) => {
  return (
    <div>
      <p className="text-white text-sm mb-2 mt-6">Done - {doneTasks.length}</p>
      <ul>
        {doneTasks.map((task) => (
          <TaskItemDone task={task} />
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
