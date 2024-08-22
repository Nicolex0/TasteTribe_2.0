import React from "react";
import FeaturedRecipe from "../../components/FeaturedRecipe";
import ExploreRecipes from "../../components/ExploreRecipes";

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
