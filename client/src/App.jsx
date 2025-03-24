import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import { Tasks } from "./pages/Tasks";
import { MainLayout } from "./layouts/mainLayout";
import { TaskEdit } from "./pages/TaskEdit";
import { TaskAdd } from "./pages/TaskAdd";
import { Task } from "./pages/Task";


function App() {

  return (
    <BrowserRouter>

      <TaskProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Tasks />} />
            <Route path="/edit_task/:id" element={<TaskEdit />} />
            {<Route path="/add_task" element={<TaskAdd />} />}
            {<Route path="/tasks/:id" element={<Task/>} />}
          </Route>


        </Routes>

      </TaskProvider>

    </BrowserRouter>
  )
}

export default App
