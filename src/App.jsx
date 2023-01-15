import { useState } from 'react'
import './App.css'
import {Header} from "./components/Header"
import {JobDetails} from "./components/JobDetails"
import {MyRoutes} from "./routers/routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <MyRoutes/>
    </div>
  )
}

export default App
