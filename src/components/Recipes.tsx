import { useEffect } from 'react';
import { SmallRecipesCard } from './SmallRecipesCard';
import recipesData from '../assets/db.json';

export const Recipes = () => {
  const { recipes } = recipesData;
  // const fetchRecipes = async () => {
  //   const res = await fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&limitLicense=true&tags=italian&number=10`
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // };

  useEffect(() => {
    // fetchRecipes();
  }, []);

  return (
    <section className="mx-auto my-16">
      <div className="inline-grid gap-20 grid-cols-3 grid-rows-3">
        {recipes.map((recipes, index) => (
          <SmallRecipesCard
            key={index}
            imageUrl={recipes.image}
            title={recipes.title}
            description={recipes.description}
          />
        ))}
      </div>
    </section>
  );
};
