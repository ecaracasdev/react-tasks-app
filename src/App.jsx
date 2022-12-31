import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-200 to-green-500">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
