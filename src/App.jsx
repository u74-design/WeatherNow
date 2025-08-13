import React from 'react'
import Temp from './components/weather/Temp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  Temp
  return (
    <div>
      <Temp />
      <ToastContainer  position="top-right" autoClose={1000} hideProgressBar = {true}/>
    </div>
  )
}

export default App
