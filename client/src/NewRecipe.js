import { useState } from "react";

function NewRecipe({ recipeData, setRecipeData, addRecipe }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    chef: "",
    description: "",
    video: "",
    is_favorited: ""
  })
  const [recipeSubmitted, setRecipeSubmitted] = useState("")
  const [checkRecipe, setCheckRecipe] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newRecipe => {
      setFormData({
        title: "",
        image: "",
        chef: "",
        description: "",
        video: "",
        is_favorited: ""
      })
      addRecipe(newRecipe)
      setRecipeSubmitted("Your recipe was added successfully!")
      setCheckRecipe("To check it, navigate to the Home page.")
    })  
  }

  // const driversList = drivers.map(driver => {
  //   return (
  //     <option key={driver.id} name="driver_id" value={driver.id}>{driver.name}</option>
  //   )
  // })

  // const trucksList = trucks.map(truck => {
  //   return (
  //     <option key={truck.id} name="truck_id" value={truck.id}>{truck.truck_color} {truck.truck_model}</option>
  //   )
  // })
    
  return (

    <>
    <p className="adjust"></p>
    <div className="form-style-8">
      <h2>Add a new recipe</h2>
      <h4>Fill out the form below to add a new recipe</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="text" name="chef" placeholder="Chef" value={formData.chef} onChange={handleChange}/>
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
        <input type="text" name="video" placeholder="Video URL" value={formData.video} onChange={handleChange}/>
        <select value={formData.is_favorited} name="is_favorited" onChange={handleChange}>
          <option value="none">Mark as favorite</option>
          <option value={true} name="yes">Yes</option>
          <option value={false} name="no">No</option>
        </select>
        <br></br>
        <button id="button" type="submit">Submit</button>
        <br></br>
        <p className="submitted">{recipeSubmitted}</p>
        <p className="submitted">{checkRecipe}</p>
      </form>
    </div>
    </>
  )
}

export default NewRecipe;