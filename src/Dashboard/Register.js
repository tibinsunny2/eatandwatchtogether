import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
function Register() {
    const username = useRef()
    const password = useRef()
    const phonenumber = useRef()
    const navigate=useNavigate();
    alert('please use your laptop or pc with an active internet connection')
    alert('give any username and password....')
     const submit = () => {
            localStorage.setItem("usernameData",username.current.value)
            localStorage.setItem("passwordData",password.current.value)
            localStorage.setItem("phonenumberData",phonenumber.current.value)
            navigate("/login")
            alert("registration success")
          
        }
    return (
        <div>
           {
             <div className='page'>
             <div class='cover'>
                 <h1>Register</h1>
                 <form onSubmit={submit}>
                     <input type="text" placeholder='enter username'  ref={username}></input><br></br><br></br>
                     <input type="password" placeholder='enter password'ref={password}></input><br></br><br></br>
                     <input type="text" placeholder='phone number'  ref={phonenumber}></input><br></br><br></br>
                     <div className='btn btn-primary' onClick={submit} >Register</div>
                 </form>
                 
                 <p className='text'>or login using</p>
                 <div className='alt-login'>
                     <div className='facebook'><i class="bi bi-facebook fs-3"></i></div><br></br>
                     <div className='google'><i class="bi bi-google fs-3"></i></div>
                 </div>
             </div>
         </div>
           }
        </div>
    )
}

export default  Register 