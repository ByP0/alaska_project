import { EnterPage } from './pages/enterPage/enterPage'
import { MainPage } from './pages/mainPage/mainPage'
import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom'
import { useEffect } from 'react';





    const sendUserAgent = async()=>{
        const userAgent = window.navigator.userAgent

        try{
            await fetch('http://localhost:8000/log',{
                method:'POST',
                headers:{
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({userAgent:userAgent})
            })
            console.log('отправил');
        }catch(error){
            console.log('не отправил',error);
        }
    }

function App() {

    useEffect(() => {
    sendUserAgent();
  }, []);
 

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
