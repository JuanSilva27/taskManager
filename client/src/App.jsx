import { BrowserRouter, Route, Routes } from "react-router-dom";
import {TaskProvider} from "./context/TaskProvider";
import { Header } from "./components/header";
import { SideBar } from "./components/SideBar";
import { Tasks } from "./pages/Tasks";
import { MainLayout } from "./layouts/mainLayout";


function App() {

  return (
    <BrowserRouter>

      <TaskProvider>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Tasks/>}  />




          </Route>


        </Routes>

      </TaskProvider>

    </BrowserRouter>
  )
}

export default App
