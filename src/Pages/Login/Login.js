import React from 'react'
import { Link } from 'react-router-dom'
// Imgs
import LoginBack from '../../assets/images/LoginBack'
import Logo from '../../assets/images/Logo'
// Styles
import './Login.css'

function Login() {
    return (
        <section className='login'>
            <div className='login-main'>
                <Logo/>
                <LoginBack/>
            </div>
            <div className='login-secondary'>
                <div className='login-secondary_wrapper'>
                    <h1>Welcome to Renesans!👋</h1>
                    <span>Please sign-in to your account and start the adventure</span>
                    <form>
                        <label>
                            E-mail
                            <input type='email' placeholder='example@mail.com'/>
                        </label>
                        <label>
                            Password  
                            <input type='password' placeholder='1234567'/>
                        </label>
                        <label className='login_check'>
                            <input type='checkbox'/>
                            Remember Me
                        </label>
                        <Link to='/'>Sign in</Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login