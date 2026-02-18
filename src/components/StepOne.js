import React from 'react'

const StepOne = ({formData , handleChange , nextStep}) => {
  return (
    <div>
        <h1>Basic Information</h1>
     <input  
          type= "text"
          name= "Full Name"
          placeholder='Full Name'
          value = {formData.fullName}
          required = "true"
          onChange= {handleChange}
          />

          <br></br>

          <input  
          type= "text"
          name= "Email"
          placeholder='Email'
          value = {formData.email}
          required = "true"
          onChange= {handleChange}
          />

          <br></br>



          <button onClick={nextStep}>Next</button>
    </div>
   
  )
}

export default StepOne