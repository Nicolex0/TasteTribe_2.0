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

  return (
    <div></div>
  )
}

export default UserRecipes;