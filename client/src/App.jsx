import { BrowserRouter, Route, Routes } from "react-router-dom";
import {TaskProvider} from "./context/TaskProvider";
import { Header } from "./components/header";
import { SideBar } from "./components/SideBar";
import { Tasks } from "./pages/Tasks";


function App() {

  return (
    <BrowserRouter>

      <TaskProvider>
        <Routes>
          <Route path="/" element={
            <div className="bg-gray-200">
              <Header />
              <div className="md:flex md:min-h-screen">
                <SideBar />
                <main className="flex-1 p-10">
                  <div className='bg-white p-5 shadow mt-10 rounded-md'>

                    <Tasks></Tasks>

                  </div>
                </main>
              </div>
            </div>
          }>




          </Route>


        </Routes>

      </TaskProvider>

    </BrowserRouter>
  )
}

export default App
