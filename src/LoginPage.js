import React, {useState} from 'react'
import styled from 'styled-components/macro'

export default function LoginPage ({onSubmit}){
  const [formData, setFormData] = useState({email:'', password:''})
  
  function handleSubmit(event) {
        event.preventDefault()
        onSubmit(formData)
      }
  
  function updateFormData(event) {
        setFormData({
          ...formData,
            [event.target.name]: event.target.value
        })
      }
    
  
  return (
    <>
    <FormStyled onSubmit={handleSubmit}>
           <label>
             Email
             <input
               onChange={updateFormData}
               value={formData.email}
              type="email"
              name="email"
            />
          </label>
          <label>
            Password
            <input
               onChange={updateFormData}
               value={formData.password}
              name="password"
              type="password"></input>
          </label>
          <button>Submit</button>
        </FormStyled>
   </>     
  )
}
const FormStyled = styled.form`
  display: grid;
  grid-gap: 10px;
  label {
    display: grid;
  }
  button {
    padding: 5px;
  }
` 
