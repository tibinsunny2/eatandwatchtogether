import React,{useRef} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
function Login() {
  const Username = localStorage.getItem("usernameData")
  const Password = localStorage.getItem("passwordData")
  const username = useRef()
  const password = useRef()
  const Navigate=useNavigate()
  console.log(password);
  const move=()=>{
    if(Username==username.current.value && Password==password.current.value){
      Navigate("/sidebar")
     
      alert('login successful')
  }else{
    alert('username or password incurrect')
  }
  }
  return (

    <div>
      {
        <div class='cover'>
        <h1>Login</h1>
        <input type="text" placeholder='enter username' ref={username}></input><br></br>
        <input type="password" placeholder='password' ref={password}></input>
        <div className='btn btn-primary' onClick={move}>Login</div>
        <p className='text'>or login using</p>
        <div className='alt-login'>
          <div className='facebook'><i class="bi bi-facebook fs-3"></i></div><br></br>
          <div className='google'><i class="bi bi-google fs-3"></i></div>
        </div>
      </div>
      }
    </div>

  )
}

export default Login



