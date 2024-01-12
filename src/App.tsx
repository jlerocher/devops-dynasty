import { About } from './About'
import Home from './Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignIn } from './login'
import { NotFound } from './NotFound'
import { Register } from './Register'
import TermsOfUse from './TermsOfUse'

function App() {

  return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </BrowserRouter>
  )
}

export default App
