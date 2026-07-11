import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCar from './components/AddRegistration'
import SearchCar from './components/SearchRegistration'
import DeleteCar from './components/DeleteRegistration'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddRegistration from './components/AddRegistration'
import SearchRegistration from './components/SearchRegistration'
import DeleteRegistration from './components/DeleteRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<AddRegistration/>} />
          <Route path='/search' element={<SearchRegistration/>} />
          <Route path='/delete' element={<DeleteRegistration/>} />
        

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
