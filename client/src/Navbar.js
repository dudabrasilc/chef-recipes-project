import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  let chefName = user.username[0].toUpperCase() + user.username.slice(1)

  return (
      <>
         <div className="header-background">
            <div>
            <p className="welcome">Welcome, Chef {chefName}!</p>
            <button onClick={handleLogoutClick} className="logout-button">Logout</button>
            </div>            
            <Link exact to="/comments" className="nav-button"> Comments </Link>
            <Link exact to="/new-recipe" className="nav-button">New Recipe</Link>
            <Link exact to="/recipes" className="nav-button"> Home </Link>
        </div>
    </>
  )
}