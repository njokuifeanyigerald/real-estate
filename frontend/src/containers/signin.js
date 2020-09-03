import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {login} from '../actions/auth'

const Signin = ({login, isAuthenticated}) => {

   const [formData, setFormData] = useState({
       email: '',
       password: ''
   })
   const {email, password } = formData;
   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

   const onSubmit = e => {
       e.preventDefault();
       login(email,password)
   }
   if(isAuthenticated){
       return <Redirect to='/' />

   }
   return (
        <div className='auth container'>
           <Helmet>
               <title>9jaProperty - Login</title>
               <meta
                    name='description'
                    content='Login page'
                />
            </Helmet>
            <h1 className="auth__title lead text-capitalize">login</h1>
            <p className='auth__authtext lead text-capitalize'>Sign into your account</p>
            <form className='auth__form' onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input className='auth__form__input' 
                        type='email' placeholder='email' name='email' value={email} onChange={e => onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input className='auth__form__input'
                        type='password' placeholder='password' name='password'
                        value={password} onChange={e => onChange(e)} required minLength='8' />
                </div>
                <button className='auth__form__button'>Login</button>
                <p className='auth__authtext lead text-capitalize'>
                    don't have an account? <Link className='auth__authtext__link' to='/signup'>sign up</Link>
                </p>
            </form>

           
        </div>
   )

};

Signin.propTypes ={
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

}
const mapStateToProps = state => ({
    isAuthenticated:  state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login}) (Signin);