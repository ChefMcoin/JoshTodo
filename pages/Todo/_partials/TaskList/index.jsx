import React from "react";
import TaskItem from "./_partials/TaskListItem";
// import TaskItem from "./TaskItem";

const TaskList = ({ tasks, markAsDone, markAsDelete }) => {
  return (
    <div className="py-5 w-full ">
      <p className="text-white text-sm">Task to do - {tasks.length}</p>
      <ul>
        {tasks.map((task) => (
          //   <TaskItem
          //     key={task.id}
          //     task={task}
          //     markAsDone={markAsDone}
          //     markAsDelete={markAsDelete}
          //   />
          <TaskItem
            key={task.id}
            task={task}
            markAsDone={markAsDone}
            markAsDelete={markAsDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
