import React, { useState } from 'react'

const MultiStepForm = () => {
    const [step , setStep] = useState(1)

    const [formData, setFormData] = useState({
        fullName : "",
        email : "", 
        checkbox : []
    })

    const previousStep = () => setStep(prev => prev - 1);
    const nextStep = () => setStep(prev => prev + 1);

    
  const handleChange = (e) => {
    const {name , value , type , checked} = e.target
    e.preventDefault()
    
    if(type === "checkbox"){
        setFormData(prev => ({
            ... prev , 

        }))
    }
  }

  return (
    <div>MultiStepForm</div>

  )
}

export default MultiStepForm