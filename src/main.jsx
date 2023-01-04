import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { TaskContextProvider } from "./context/TaskContext"
import { AuthContextProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
