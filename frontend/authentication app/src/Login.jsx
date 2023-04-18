import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [values, setvalues] = useState({
        email:'',
        password:''
        
      })
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/login',values)
    .then(res=> {
     if(res.data.Status === "Success"){
    navigate('/')
     
     }else{
  alert("Error");
     
     }
    })
    .then(err=>console.log(err));
  }
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'></div>
            <h2>Sign-In</h2>
            <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="name"><strong>Email</strong></label>
                    <input type="text" placeholder='Enter Name' name='name'
                  onChange={e => setValues({...values,email:e.target.value})}  className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="name"><strong>Password</strong></label>
                    <input type="text" placeholder='Enter Name' name='name'
                   onChange={e => setValues({...values,password:e.target.value})} className='form-control rounded-0'/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
<p>You are agree to our terms and policies</p>
<Link to="/register" className='btn btn-default broder w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>  

            </form>
            </div>
    </div>
  )
}

export default Login
