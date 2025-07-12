import React from 'react'
import { Link } from 'react-router'
const SignUp = () => {
  return (
    <div>
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      <p className="py-6">
       already have an account <Link to={"/login"} className='text-secondary'>Login</Link>
      </p>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
        <label className="label text-base-content">Username</label>
          <input type="text" className="input " placeholder="username" />
          <label className="label text-base-content">Email</label>
          <input type="email" className="input " placeholder="Email" />
          <label className="label text-base-content">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-primary mt-4">Continue</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp
