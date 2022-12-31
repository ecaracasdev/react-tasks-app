import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)
  return (
    <div>
      <img src={task.image} alt={task.title} />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task._id)}>Eliminar Tarea</button>
    </div>
  )
}

export default TaskCard
