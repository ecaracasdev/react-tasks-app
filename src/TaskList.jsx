function TaskList({ tasks }) {
  if (tasks.length === 0) return <h1>no hay tareas aun</h1>

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
