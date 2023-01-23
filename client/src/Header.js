import React from 'react';
import Navbar from './Navbar';

export default function Header({ user, setUser, onLogout }) {


  return (
    <div className="header-background">
      <h1 className="header">Chef Recipes</h1>
      <Navbar user={user} setUser={setUser} onLogout={onLogout}/>
    </div>
  )
}
