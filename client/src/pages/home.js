import Layout from '../components/layout'
import "./home.css"

import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { onLogin } from '../api/auth'

import { useDispatch } from 'react-redux'
import { authenticateUser } from '../redux/slices/authSlice'


const Home = () => {
  
// const [values, setValues] = useState({
//     email: '',
//     password: '',
//   })
//   const [error, setError] = useState(false)

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
//   }
  
//   const dispatch = useDispatch()
//   const onSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       await onLogin(values)
//       dispatch(authenticateUser())

//       localStorage.setItem('isAuth', 'true')
//     } catch (error) {
//       console.log(error.response.data.errors[0].msg)
//       setError(error.response.data.errors[0].msg)
//     }
//   }

  return (
    <Layout>
      <img src="image/logo.png" alt="logo" className='logo1'/>
      <h1 className='welcome'>Welcome to RIO</h1>

            <NavLink to='/login'>
       <button className='btn1'>Login</button>
         </NavLink>
         <NavLink to='/register'>
         <button className='btn2'>Register</button>
            </NavLink>
            


      {/* <div className="container">
  <div className="row justify-content-around">
    <div className="col-4">
      <img src="image/logo.png" alt="logo" className='logo'/>
      <div className="heading">Admin Panel</div>
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

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
    <div className="col-4">
      <img src="image/login.jpg" alt="login"  className='login'/>
    </div>
    
  </div>
  </div> */}
    </Layout>
  )
}

export default Home