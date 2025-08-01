import { EnterPage } from './pages/enterPage/enterPage'
import { MainPage } from './pages/mainPage/mainPage'
import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom'

function App() {
 

  return (
   <div>
    <Routes>
       <Route path="/" element={<Navigate to="/enter" replace />} />
      <Route path='/enter' element={<EnterPage/>} />
      <Route path='/main' element={<MainPage/>}/>
    </Routes>
   

   </div>
  )
}

export default App
