import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import { useState, useEffect } from "react"
import { tasks as data } from "./task"

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      _id: tasks.length,
      description: 'nueva tarea'
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
