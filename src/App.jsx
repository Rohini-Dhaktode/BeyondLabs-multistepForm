import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiStepForm from './components/MultiStepForm'

function App() { 
  const [input , setInput] = useState("")
  const [lists , setLists] = useState([])
  const [step , setStep] = useState(1)


  
  return (
    <>
      <div>
        <MultiStepForm/>
      </div>
     
    </>
  )
}

export default App
