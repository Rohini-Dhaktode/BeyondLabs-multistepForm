import React from 'react'

const StepTwo = () => {
  return (
    <div>
        <h1>Additional Details</h1>
       <select>
        <option>Developer</option>
        <option>Designer</option>
        <option>Manager</option>
       </select>

       <br></br>

       <label>
        <input  
          type= "checkbox"
          name= "Email"
          placeholder='Email'
          value = {formData.email}
          required = "true"
          onChange= {handleChange}
          />
       </label>
    </div>
  )
}

export default StepTwo