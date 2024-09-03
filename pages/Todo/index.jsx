import React, { useState, useEffect } from "react";
import InputField from "./_partials/InputContainer";
import TaskList from "./_partials/TaskList";
import DoneList from "./_partials/DoneList";
import { getStoredTasks, setStoredTasks } from "../../utils/storage";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getStoredTasks("tasks");
    const storedDoneTasks = getStoredTasks("doneTasks");
    setTasks(storedTasks);
    setDoneTasks(storedDoneTasks);
  }, []);

  useEffect(() => {
    setStoredTasks("tasks", tasks);
  }, [tasks]);

  useEffect(() => {
    setStoredTasks("doneTasks", doneTasks);
  }, [doneTasks]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Math.random(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const markAsDone = (taskId) => {
    const taskToMark = tasks.find((task) => task.id === taskId);

    if (!taskToMark || taskToMark.completed) {
      return; // If the task doesn't exist or is already completed, exit the function
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );

    setDoneTasks([...doneTasks, { ...taskToMark, completed: true }]);
  };

  const markAsDelete = (taskId) => {
    const taskToMarkNew = tasks.find((task) => task.id === taskId);
    if (!taskToMarkNew || taskToMarkNew.completed) {
      return; // If the task doesn't exist or is already completed, exit the function
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );

    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-3/12 bg-[#1D1825] px-12 py-10 rounded-md">
      <InputField
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        addTask={addTask}
        handleKeyPress={handleKeyPress}
      />
      <TaskList
        tasks={tasks}
        markAsDone={markAsDone}
        markAsDelete={markAsDelete}
      />
      <DoneList doneTasks={doneTasks} />
    </div>
  );
};

export default Todo;
