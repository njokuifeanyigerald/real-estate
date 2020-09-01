import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom'
import {setAlert} from '../actions/alert'
import {signup} from '../actions/auth'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'



const Signup = ({setAlert, signup, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const {name, email, password,password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        if (password !==  password2){
            setAlert('Passwords do Not match', 'error')
        }else{
            signup({name, email, password, password2})
        }

    }
    if (isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <div className='auth'>
            <Helmet>
                <title>9jaProperty - Signup</title>
                <meta
                    name='description'
                    content='SignUp page'
                />
            </Helmet>
            <h1 className="auth__title text-capitalize">Sign Up</h1>
            <p className='auth__lead text-capitalize'>Sign Up an account</p>
            <form className='auth__form' onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input className='auth__form__input' 
                        type='name' placeholder='name' name='name' value={name} onChange={e => onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input className='auth__form__input' 
                        type='email' placeholder='email' name='email' value={email} onChange={e => onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input className='auth__form__input'
                        type='password' placeholder='password' name='password'
                        value={password} onChange={e => onChange(e)} required minLength='8' />
                </div>
                <div className='auth__form__group'>
                    <input className='auth__form__input'
                        type='password' placeholder='confirm password' name='password2'
                        value={password2} onChange={e => onChange(e)} required minLength='8' />
                </div>
                <button className='auth__form__button'>Signup</button>
                <p className='auth__authtext text-capitalize'>
                    already have an account? <Link className='auth__authtext__link' to='/login'>Login</Link>
                </p>
            </form>
        </div>
    
    )
}

Signup.propTypes ={
    
    signup: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

}
const mapStateToProps = state => ({
    isAuthenticated:  state.auth.isAuthenticated
})

export default connect(mapStateToProps,{setAlert,signup}) (Signup);