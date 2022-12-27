import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const user  = {
    email:"hasan@webluna.az",
    pass:'hasan123'
}
const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const navigate = useNavigate();

    const loginFrom =(e)=>{
        e.preventDefault();
     
        if (!email || !pass) {
          alert('please, fill input')
        }else{
            if (email === user.email && pass === user.pass) {
                navigate('/admin');
            }else{
                alert('email or password is wrong!')
            }
        }
    }
  return (
<>
<h1 className='mt-5 text-center'>Login</h1>
<div className="d-flex align-item-center justify-content-center flex-cloumn">
<form onSubmit={loginFrom} className='col-6'>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  />
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input onChange={(e)=>{setPass(e.target.value)}} type="password" className="form-control"  />
  </div>
  <button type="submit" className="btn btn-dark">Login</button>
</form>
</div>

</>

  )
}

export default Login