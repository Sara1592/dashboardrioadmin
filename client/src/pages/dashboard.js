import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedInfo, onLogout } from '../api/auth'
import Layout from '../components/layout'
import { unauthenticateUser } from '../redux/slices/authSlice'
import "./home.css"
import axios from "axios";
import Email from'../components/Email'





function Dashboard() {
//  const [email , setEmail] = useState('')
//  const [college , setCollege] = useState('') 

//  const handleClick = (e) => {
//   e.preventDefault();

//   if(e.target.id === "email") {
//     setEmail(e.target.value)
//   } 
//   else{
//      setCollege(e.target.value)
//   }  
//  }

//  const handleSubmit = (e) => {
//    e.preventDefault();

//    const dataToSubmit = {
//       email,
//       college
//    }

//   //  axios.post("http://localhost:8001/api/sendMail",dataToSubmit)

//  }



  return (

    <Layout>
      
      <div className="container">
  <div className="row justify-content-around">
   <div className="col-5">
           <img src="image/logo.png" alt="logo" className='logo'/>
       <div className="heading">Register Your College</div>

       <Email />
       
       {/* <form  className='container mt-3' onSubmit={handleSubmit}>
       
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
                    <input
          onChange={handleClick}
           type='email'
           className='form-control'
           id='email'
           name='email'
          value={email} 
           placeholder='Enter Your Email ID'
           required
         />
       </div>

       <div className='mb-3'>
         <label htmlFor='college' className='form-label'>
        College Name
         </label>
         <input
          onChange={handleClick}
           type='text'
           value={college}
           className='form-control'
           id='college'
           name='college'
           placeholder='Enter Your College Name'
           required
         />
       </div>

       {/* <div style={{ color: 'red', margin: '10px 0' }}>{error}</div> */}

       {/* <button type='submit' className='btn btn-primary'>
         Submit
       </button>
     </form> */} 
     </div>
     </div>
     </div>


    </Layout>
  );
}
export default Dashboard

// const Dashboard = () => {
//   const dispatch = useDispatch()
//   const [loading, setLoading] = useState(true)
//   const [protectedData, setProtectedData] = useState(null)

//   const logout = async () => {
//     try {
//       await onLogout()

//       dispatch(unauthenticateUser())
//       localStorage.removeItem('isAuth')
//     } catch (error) {
//       console.log(error.response)
//     }
//   }

//   const protectedInfo = async () => {
//     try {
//       const { data } = await fetchProtectedInfo()

//       setProtectedData(data.info)

//       setLoading(false)
//     } catch (error) {
//       logout()
//     }
//   }

//   useEffect(() => {
//     protectedInfo()
//   }, [])

//   return loading ? (
//     <Layout>
//       <h1>Loading...</h1>
//     </Layout>
//   ) : (
//     <div>
//       <Layout>
//       <div className="container">
//   <div className="row justify-content-around">
//     <div className="col-5">
//       <img src="image/logo.png" alt="logo" className='logo'/>
//       <div className="heading">Register Your College</div>
       
//       <form  className='container mt-3'>
       
//        <div className='mb-3'>
//          <label htmlFor='email' className='form-label'>
//            Email Address
//          </label>
//          <input
//           //  onChange={(e) => onChange(e)}
//            type='email'
//            className='form-control'
//            id='email'
//            name='email'
//           //  
//            placeholder='Enter Your Email ID'
//            required
//          />
//        </div>

//        <div className='mb-3'>
//          <label htmlFor='college' className='form-label'>
//         College Name
//          </label>
//          <input
//           //  onChange={(e) => onChange(e)}
//            type='text'
           
//            className='form-control'
//            id='college'
//            name='college'
//            placeholder='Enter Your College Name'
//            required
//          />
//        </div>

//        {/* <div style={{ color: 'red', margin: '10px 0' }}>{error}</div> */}

//        <button type='submit' className='btn btn-primary'>
//          Submit
//        </button>
//      </form>
//      </div>
//      </div>
//      </div>
    

        
//       </Layout>
//     </div>
//   )
// }

// export default Dashboard