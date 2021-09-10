import React from "react";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

import Data from "../data.json";

const Index = () => {
  const history = useHistory();
  console.log(Data);
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Recipe app for react helmet demonstration"
        />
        <meta name="keywords" content="Recipe app" />
        <title>Recipe app for react helmet demonstration</title>
      </Helmet>
      <header>Recipe app for react helmet demonstration</header>
      <section className="index">
        {Data.map((Datum) => {
          const { id, img, name } = Datum;

          return (
            <div key={id}>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <p onClick={() => history.push(`/single-recipe/${name}`)}>
                Click here to see ingredients
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Index;
