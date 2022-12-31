import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <img src={task.image} alt={task.title} />
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 break-words">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task._id)}>Eliminar Tarea</button>
    </div>
  )
}

export default TaskCard
