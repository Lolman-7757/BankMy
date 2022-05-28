import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@nextui-org/react';
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
                            <Input
                            width='90%'
                            clearable
                            label="E-mail"
                            placeholder='admin@mail.com'
                            bordered
                            className='login_vall'
                            color="secondary"
                            onChange={e => console.log(e.target.value)}
                            required
                            />
                        <Input.Password 
                            labelPlaceholder="Password" 
                            initialValue="nextui123" 
                            bordered
                            className='login_vall'
                            width='90%'
                            color="secondary"/>
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