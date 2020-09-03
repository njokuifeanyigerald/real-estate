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
           <Link className="navbar__top__auth__link " to='/login'>Login</Link>
           <Link  className="navbar__top__auth__link " to='/signup'>Signup</Link>
       </Fragment>
   )
   return(
       <Fragment>
           <nav className=" nav">
               <div className="navbar__top">
                   <div className=" nav-item">
                       {/* <img src={android} alt='' className="mr-4 d-none navlink d-md-block d-lg-block d-sm-none"/> */}
                       <Link className="navbar__top__logo__link nav-link " to='/'>9jaProperty</Link>
                   </div>
                   <div className=" nav-item">
                        <div className="navbar__top__auth nav-link justify-content-end ml-5 " style={{marginRight:4, marginTop:5}}>
                            {!loading && (<Fragment>{isAuthenticated ? authLinks: guestLink}</Fragment>)}
                        </div>
                   </div>
               </div>
            </nav>
            <nav className="nav">
               <div className="navbar__bottom ">
                   <li className="navbar__bottom__item nav-item">
                       <NavLink className="navbar__bottom__item__link nav-link" exact to='/'>Home</NavLink>
                   </li>
                   <li className="navbar__bottom__item nav-item">
                       <NavLink className="navbar__bottom__item__link nav-link" exact to='/listings'>Listings</NavLink>
                   </li>
                   <li className="navbar__bottom__item nav-item">
                       <NavLink className="navbar__bottom__item__link nav-link" exact to='/about'>About</NavLink>
                   </li>
                   <li className="navbar__bottom__item nav-item">
                       <NavLink className="navbar__bottom__item__link nav-link" exact to='/contact'>Contact</NavLink>
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