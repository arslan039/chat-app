import React from 'react';
import Add from "../images/Add.png";

export default function Register() {
  return (
 <div className='formContainer'>
 <div className='formWrapper'>
<span className='logo'>Arslan Chat App</span>
<span className='title'>Register</span>
<form >
<input type="text" placeholder='Enter Name' />
<input type="email" placeholder='email' />
<input type="password" placeholder='password' />
<input style={{display:"none"}} type="file" id="file"/>
<label htmlFor="file">
  <img src={Add} alt="" />
  <span>Add an Avatar</span>
</label>

<button>Sign Up</button>
</form>

<p>Do you have an Account ? Login</p>

      </div>
     
    </div>
  )
}
