import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/task"

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        _id: tasks.length,
        description: task.description,
        image: "https://robohash.org/user" + tasks.length + 1,
      },
    ])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task._id !== taskId))
  }

  useEffect(() => {
    setTasks(data)
  }, [])


  return <TaskContext.Provider value={{
    tasks,
    createTask,
    deleteTask
  }}>{props.children}</TaskContext.Provider>
}
