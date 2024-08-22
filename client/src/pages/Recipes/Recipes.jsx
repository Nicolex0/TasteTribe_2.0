import React from "react";
import ExploreRecipes from "../../components/ExploreRecipes";
import FeaturedRecipe from "../../components/FeaturedRecipe";

const Recipes = () => {
  return (
    <div>
      <div>
        <FeaturedRecipe />
      </div>
      <div>
        <ExploreRecipes />
      </div>
    </div>
  );
};

export default Recipes;
