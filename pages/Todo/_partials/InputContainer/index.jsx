import React from "react";

const InputField = ({
  inputValue,
  handleInputChange,
  addTask,
  handleKeyPress,
}) => {
  return (
    <div className="flex gap-2 w-full justify-between">
      <input
        placeholder="Add a new task"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="bg-[#15101C] w-11/12 border-[#9E78CF] border-2 rounded-md px-2 text-sm text-white"
      />
      <button
        onClick={addTask}
        className="bg-[#9E78CF] py-0.2 px-2 rounded-md text-xl text-white"
      >
        +
      </button>
    </div>
  );
};

export default InputField;
