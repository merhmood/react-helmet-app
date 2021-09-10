import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Data from "../data.json";

const SingleRecipe = () => {
  const { name } = useParams();
  const recipe = Data.filter((datum) => datum.name === name);
  console.log(recipe);
  return (
    <>
      <section className="recipe">
        {recipe.map((item) => {
          const { id, img, name, ingredients } = item;

          return (
            <main key={id}>
              {" "}
              <Helmet>
                <meta
                  name="description"
                  content={ingredients.map((item) => item)}
                />
                <meta name="keywords" content={name} />
                <title>{name}</title>
              </Helmet>
              <div>
                <h2>{name}</h2>
                <img src={img} alt={name} />
                <ul>
                  {" "}
                  {ingredients.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </div>
            </main>
          );
        })}
      </section>
    </>
  );
};

export default SingleRecipe;
