import React from "react";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

const TaskItem = ({ task, markAsDone, markAsDelete }) => {
  return (
    <li className="flex text-sm mt-1 justify-between bg-[#15101C] py-3 rounded-md text-[#9E78CF] mb-2 px-3">
      {task.text}
      <div className="flex gap-4">
        <CheckOutlined onClick={() => markAsDone(task.id)} />
        <DeleteOutlined
          onClick={() => markAsDelete(task.id)}
          style={{
            color: task.completed ? "#3E1671" : "#9E78CF",
            cursor: "pointer",
          }}
        />
      </div>
    </li>
  );
};

export default TaskItem;
