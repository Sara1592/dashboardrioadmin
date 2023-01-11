import React, { useEffect} from 'react'
import { Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { userRegister } from '../api/auth'
// import Layout from '../components/layout/layout'
import { useDispatch } from 'react-redux'
import { authenticateUser } from '../redux/slices/authSlice'




import {
   useParams 
} from "react-router-dom"




function Verify(){
  const {id, token} = useParams();
  const navigate = useNavigate();
  let user = null
  let isApiComplete = false
useEffect(() => {
 axios.get(`http://localhost:8000/verify/${id}/${token}`)
 .then(response => {
isApiComplete = true
  // console.log(response)
  if(response.data.status==='success')
  {
  user=response.data.data
  }
  
 }) 
},[]) 


const [values, setValues] = useState({
  email: '',
  password: '',
})
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)

const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
}

const onSubmit = async (e) => {
  e.preventDefault()

  try {
    const { data } = await userRegister(values)

    setError('')
    setSuccess(data.message)
    setValues({ email: '', password: '' })
  } catch (error) {
    setError(error.response.data.errors[0].msg)
    setSuccess('')
  }
}




// return !isApiComplete ? 'pls wait' : (user ? 'user validated' : 'user not validated.try again')
  
   return (
    
    
    <div className="container">
    <div className="row justify-content-around">
     <div className="col-5">
             
             
         <div className="heading">Register</div> 

      <div className="d-flex justify-content-center"> 
      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
       

       <div className='mb-3'>
         <label htmlFor='email' className='form-label'>
           Email address
         </label>
         <input
           onChange={(e) => onChange(e)}
           type='email'
           className='form-control'
           id='email'
           name='email'
           value={values.email}
           placeholder='test@gmail.com'
           required
         />
       </div>

       <div className='mb-3'>
         <label htmlFor='password' className='form-label'>
           Password
         </label>
         <input
           onChange={(e) => onChange(e)}
           type='password'
           value={values.password}
           className='form-control'
           id='password'
           name='password'
           placeholder='password'
           required
         />
       </div>

       <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
       <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

       <button type='submit' className='btn btn-primary'>
         Submit
       </button>
     </form>
                </div>


    </div>
    </div>
    </div>
  )
}
export default Verify
