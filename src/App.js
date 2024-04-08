import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import {Home} from './container/Index';

function App() {
  return (
    <div className=' w-screen h-screen flex justify-start items-start overflow-hidden'>
      <Routes>
        <Route path='/home/*' element={<Home/>}/>
        <Route path='*' element={<Navigate to={"/home"}/>} />
      </Routes>
    </div>


  )
}

export default App;
