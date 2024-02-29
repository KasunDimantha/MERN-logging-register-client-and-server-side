import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./Signup"
import Loginn from "./Loginn"
import KHome from "./KHome"
import BHome from "./BHome"
import DHome from "./DHome"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginn/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/khome" element={<KHome/>}></Route>
          <Route path="/bhome" element={<BHome/>}></Route>
          <Route path="/dhome" element={<DHome/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
