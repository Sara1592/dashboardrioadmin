import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { onColRegistration } from '../api/auth'
import axios from 'axios';


const Home = () => {

    const [values, setValues] = useState({
        coll_id: '',
        email: '',
      })
      const [error, setError] = useState(false)
      const [success, setSuccess] = useState(false)
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      }
    
      const onSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const { data } = await onColRegistration(values)
    
          setError('')
          setSuccess(data.message)
          setValues({ coll_id: '', email: '' })
        } catch (error) {
          setError(error.response.data.errors[0].msg)
          setSuccess('')
        }
      }
    

    const [show, setShow] = useState(false);
    const [email,  setEmail] = useState("");
    const [coll_id, setId] = useState("");
    const [coll_name, setName] = useState("");


    const sendEmail = async (e) => {

        e.preventDefault(); 

        

        const res = await axios.post("http://localhost:8000/api/colreg", {
            // method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify({
            //    email, 
            //     coll_id,
            // })
            
                email, 
                coll_id,
                coll_name
            
        },


        
        {
            
            // headers: {
            //             "Content-Type": "application/json"
            //         }
        }


        );

        
    
        
        const data = await res.json();
        console.log(data);
    

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            setId("")
            setName("")
            
            console.log("Email sent successfull")
        }
    }

    return (
        <>
            {
                show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Your Email Succesfully Send. Verify your email to login
                </Alert> : ""
            }
            <div className="container mt-2">
                <div className='d-flex justify-content-center'>
                   
                    {/* <img src="/gmail.png" alt="gmail img" className='mx-3' style={{ width: "50px" }} /> */}
                </div>
                <div className="d-flex justify-content-center"> 
                    <Form className='mt-2 col-lg-9' onSubmit={(e) => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your College ID</Form.Label>
                            <Form.Control type="text" name='text'  placeholder="College ID" onChange={(e) => setId(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your College Name</Form.Label>
                            <Form.Control type="text" name='text'  placeholder="College Name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            Send
                        </Button>
                    </Form>
                </div>

            </div>

        </>
    )
}

export default Home