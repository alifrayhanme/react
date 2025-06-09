import React from "react";

export const ArrayFilter = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  const chemist = people.filter(function (p) {
    return p.profession === "chemist";
  })
  return (
    <div>
      <ul>
        {chemist.map(function (p) {
            return <li key={p.id}>{p.name}</li>
        })}
      </ul>
    </div>
  );
};


