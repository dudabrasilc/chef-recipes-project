import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';


function App() {

  const [user, setUser] = useState(null);
  const [recipeData, setRecipeData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  
  
    useEffect(() => {
      fetch("http://localhost:4000/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

    useEffect(() => {
      fetch("http://localhost:4000/recipes")
        .then((r) => r.json())
        .then((recipe) => {setRecipeData(recipe)});
    }, []);

  function handleLogout() {
    setUser(null);
  }

  function handleUpdateItem(updatedItemObj) {
    const editedItems = recipeData.map((item) => {
      if (item.id === updatedItemObj.id) {
        return updatedItemObj;
      } else {
        return item;
      }
    });
    setRecipeData(editedItems);
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <div className="App">
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <Routes>
          <Route exact path="*" element={
            <MainContainer 
              recipeData={recipeData} 
              setRecipeData={setRecipeData}
              handleUpdateItem={handleUpdateItem}
              user={user}
              />}/>    
        </Routes>
    </div>
    </>
  );
}

export default App;
