import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Home } from './container/Index';
import { useEffect } from 'react';
import { auth } from './config/Firebase.config';

function App() {

  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        console.log(userCred.providerData[0])
      }
      else {
        navigate('/home/auth', { replace: true })
      }
    })
  }, [])
  return (
    <div className=' w-screen h-screen flex justify-start items-start overflow-hidden'>
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='*' element={<Navigate to={"/home"} />} />
      </Routes>
    </div>


  )
}

export default App;
