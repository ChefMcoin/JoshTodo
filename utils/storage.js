export const getStoredTasks = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const setStoredTasks = (key, tasks) => {
  localStorage.setItem(key, JSON.stringify(tasks));
};
