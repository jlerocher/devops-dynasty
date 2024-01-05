import { About } from './About'
import Home from './Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignIn } from './SignIn'
import { NotFound } from './NotFound'

function App() {

  return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </BrowserRouter>
  )
}

export default App
