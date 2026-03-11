import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContex } from '../Context/AuthContex';

const Login = () => {
    const { sginInUser } = use(AuthContex);
    const handleSginIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        sginInUser(email,password).then(result=>{
            console.log(result)
        }).catch(error=>{
            console.log(error)
        })



    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleSginIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Create an account? <Link to="/register"><span className='underline text-blue-500'>Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;