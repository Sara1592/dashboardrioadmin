import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { onLogout } from '../api/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { unauthenticateUser } from '../redux/slices/authSlice'
import "./navbar.css"

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const logout = async () =>  {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <nav className='navbar'>
      <div className='container'>
        <div>
          <NavLink to='/'>
            <span className='navbar-brand'>Welcome RIO</span>
          </NavLink>
        </div>

        {isAuth ? (
          <div>
            <NavLink to='/dashboard' className='mx-3'>
              <span className='navbar-brand'>Dashboard</span>
            </NavLink>
            <button onClick={() => logout()} className='btn btn-primary'>
          Logout
        </button>
          </div>
        ) : (
          <div>
            <NavLink to='/login'>
              <span className='navbar-brand'>Sign In</span>
            </NavLink>

            <NavLink to='/register' className='mx-3'>
              <span className='navbar-brand'>Sign Up</span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar