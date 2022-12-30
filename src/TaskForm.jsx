import { useState } from "react"

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("")

  const handledSubmit = (e) => {
    e.preventDefault()
    createTask(title)
  }

  return (
    <form onSubmit={handledSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  )
}

export default TaskForm
