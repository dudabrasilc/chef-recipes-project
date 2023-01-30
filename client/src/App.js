import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';


function App() {

  const [user, setUser] = useState(null);
  const [recipeData, setRecipeData] = useState([]);
  
  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
      fetch("/recipes")
        .then((r) => r.json())
        .then((recipe) => {setRecipeData(recipe)});
    }, []);


  function handleLogout() {
    setUser(null);
  }

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
    <div className="App">
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <Routes>
          <Route path="*" element={
            <MainContainer 
              recipeData={recipeData} 
              setRecipeData={setRecipeData}
              user={user}
              />}/>    
        </Routes>
    </div>
    </>
  );
}

export default App;
