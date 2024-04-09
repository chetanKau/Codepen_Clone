import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Home } from './container/Index';
import { useEffect, useState } from 'react';
import { auth, db } from './config/Firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import { Spinner } from './components/index';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        console.log(userCred.providerData[0])
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0])
          .then(() => {
            // dispatch teh action store
          }
          )
      }
      else {
        navigate('/home/auth', { replace: true })
      }

      setInterval(() => {
        setIsLoading(false)
      }, 2000)
    })

    // cleanup the listener event 
    return () => unsubscribe();
  }, [])
  return (
    <>
      {
        isLoading ? <div
          className='w-screen h-screen flex items-center justify-center overflow-hidden'
        >
          <Spinner />
        </div> :
          <div className=' w-screen h-screen flex justify-start items-start overflow-hidden'>

            <Routes>
              <Route path='/home/*' element={<Home />} />
              <Route path='*' element={<Navigate to={"/home"} />} />
            </Routes>

          </div>
      }

    </>



  )
}

export default App;
