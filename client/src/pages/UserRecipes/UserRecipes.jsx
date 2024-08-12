import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    chefImage: '',
    title: '',
    chefName: '',
    image: '',
    ingredients: '',
    instructions: '',
    url: '',
    moreInfoUrl: '',
    rating: 0,
    prepTime: '',
    servings: 0,
    countryOfOrigin: '',
    dietType: '',
  });

  const handleInputChange = (e) => {
    const value = e.target.name === 'rating' ? parseFloat(e.target.value) : e.target.value;
    setNewRecipe({ ...newRecipe, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedRecipe = {
      ...newRecipe,
      rating: parseFloat(newRecipe.rating) || 0,
    };

    if (editingRecipe) {
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === editingRecipe.id ? { ...submittedRecipe, id: recipe.id } : recipe
        )
      );
      setEditingRecipe(null);
    } else {
      setRecipes((prevRecipes) => [...prevRecipes, { ...submittedRecipe, id: Date.now() }]);
    }

    setNewRecipe({
      chefImage: '',
      title: '',
      chefName: '',
      image: '',
      ingredients: '',
      instructions: '',
      url: '',
      moreInfoUrl: '',
      rating: 0,
      prepTime: '',
      servings: 0,
      countryOfOrigin: '',
      dietType: '',
    });
    setShowForm(false);
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setNewRecipe(recipe);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };



  return (
    <div></div>
  )
}

export default UserRecipes;