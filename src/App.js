import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Home, NewProject } from './container/Index';
import { useEffect, useState } from 'react';
import { auth, db } from './config/Firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import { Spinner } from './components/index';
import { useDispatch } from 'react-redux'
import { SET_USER } from './context/actions/userActions';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        console.log(userCred.providerData[0])
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0])
          .then(() => {
            // dispatch teh action store
            dispatch(SET_USER(userCred.providerData[0]))
            navigate("/home/projects", { replace: true })
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
              <Route path='/newProject' element={<NewProject/>} />

              <Route path='*' element={<Navigate to={"/home"} />} />
              
            </Routes>

          </div>
      }

    </>



  )
}

export default App;
