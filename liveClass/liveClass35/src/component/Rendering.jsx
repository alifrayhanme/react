import { Item, Items, Drink } from "./Item";
import React from "react";

export const Rendering = () => {
  return (
    <div className="ml-5">
      <h2>Sally Ride's Packing List</h2>
      <Item isPacked={true} name="Space suit" />
      <Item isPacked={true} name="Helmet with a golden leaf" />
      <Item isPacked={false} name="Photo of Tam" />
    </div>
  );
};

export const PackingList = () => {
  return (
    <section className="mt-5 ml-5">
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Items importance={9} name="Space suit" />
        <Items importance={0} name="Helmet with a golden leaf" />
        <Items importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
};



export const DrinkList = () => {
  return (
    <div className="ml-5 mt-5">
      <Drink name="tea" /> <br />
      <Drink name="coffee" />
    </div>
  );
}
