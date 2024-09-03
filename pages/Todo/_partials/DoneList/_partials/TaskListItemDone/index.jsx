import React from "react";

export const TaskItemDone = ({ task }) => {
  return (
    <li
      className="text-[#78CFB0] bg-[#15101C] px-3 py-2 mb-2 rounded-md"
      style={{ textDecoration: "line-through" }}
    >
      {task.text}
    </li>
  );
};
