import React from 'react'
import { Session } from '../requests'
import {NavLink} from 'react-router-dom';
import logo from '../imgs/3204597_animal_domestic_footstep_pet_wild_icon.png'

export default function NavBar({currentUser, onSignOut}) {

  const handleSignOut =() => {
    Session.destroy()
      .then(()=> {
        onSignOut()
      })
  }



  return (
    <>
    <nav className="navbar">
      <div>
        {/* <span><img className="logo" src={logo} alt="logo"/></span> */}
        <NavLink className="nav-title" to='/'><img className="logo" src={logo} alt="logo"/> Be My Furry</NavLink>
      </div>
      {
        currentUser ? (
          currentUser.admin ? (
            <div>
            <span>Welcome, {currentUser.first_name}</span>
            -
            <button onClick={handleSignOut}>Sign Out</button>
            <NavLink to='/pets-index/0'>Dogs</NavLink>
            |
            <NavLink to='/pets-index/1'>Cats</NavLink>
            |
            <NavLink to='/pets/new'>New Pet</NavLink>
            |
            <NavLink to='/shelters'>Shelters</NavLink>
            |
            <NavLink to='/shelters/new'>New Shelters</NavLink>
            </div>
          ):
          <div className="user-info-container">
            <span className="user-name">Welcome, {currentUser.first_name}</span>
            <button className="sign" onClick={handleSignOut} >Sign Out</button>
            <NavLink to='/pets/likes' className="likes">❤️</NavLink>
          </div>
        ) : (
          <div className="sign-in-and-out-container">
            <NavLink className="sign" to='/sign_in' >Sign In</NavLink>
            <NavLink className="sign" to='/sign_up' >Sign Up</NavLink>
          </div>
        )
      }
    </nav>
    


</>
  )
}
