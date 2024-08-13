import React, { useState, useEffect } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaSearch, FaBookmark, FaFacebook, FaTwitter, FaPinterest, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// Implement categories in the explore recipes section according to diet Types
const dietType = ['All','Vegan', 'Dash', 'Keto', 'Atkins', 'Pescatarian', 'Gluten-Free'];

 // Set the states for diet types, country, recipes, searchTerm and bookmarks
 const [selectedDietType, setSelectedDietType] = useState('All'); 
 const [selectedCountry, setSelectedCountry] = useState('All');
 const [recipes, setRecipes] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

const ExploreRecipes = () => {
  return (
    <div>
      
    </div>
  )
}

export default ExploreRecipes
