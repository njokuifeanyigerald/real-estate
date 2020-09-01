import React,{Fragment} from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect}  from 'react-redux';
import {logout} from '../actions/auth'
import PropTypes from 'prop-types';
import android from './favicon.ico';
import Alert from './alert'




const navbar = ({auth: {isAuthenticated, loading}, logout}) => {

   const authLinks =(
        <a className='navbar__top__auth__link' onClick={logout} href='#!'>Logout</a>
   );

   const guestLink =  (
       <Fragment>
           <Link className="navbar__top__auth__link" to='/login'>Login</Link>
           <Link  className="navbar__top__auth__link" to='/signup'>Signup</Link>
       </Fragment>
   )
   return(
       <Fragment>
           <nav className="navbar">
               <div className="navbar__top">
                   <div className="navbar__top__logo">
                       <img src={android} alt="Logo" style={{marginRight:4, marginTop:5}} />
                       <Link className="navbar__top__logo__link " style={{marginLeft:5, marginBottom:3}} to='/'>9jaProperty</Link>
                   </div>
                   <div className="navbar__top__auth">
                        <div className="navbar__top__auth" style={{marginRight:4, marginTop:5}}>
                            {!loading && (<Fragment>{isAuthenticated ? authLinks: guestLink}</Fragment>)}
                        </div>
                   </div>
               </div>
               <div className="navbar__bottom">
                   <li className="navbar__bottom__item">
                       <NavLink className="navbar__bottom__item__link" exact to='/'>Home</NavLink>
                   </li>
                   <li className="navbar__bottom__item">
                       <NavLink className="navbar__bottom__item__link" exact to='/listings'>Listings</NavLink>
                   </li>
                   <li className="navbar__bottom__item">
                       <NavLink className="navbar__bottom__item__link" exact to='/about'>About</NavLink>
                   </li>
                   <li className="navbar__bottom__item">
                       <NavLink className="navbar__bottom__item__link" exact to='/contact'>Contact</NavLink>
                   </li>
               </div>
           </nav>
           <Alert/>
       </Fragment>
   )
   
};

navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(navbar);