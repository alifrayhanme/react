import React from "react";

export const ArrayRender = () => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
//   const persons = [];
//   people.forEach(function (e) {
//     persons.push(<li className="">{e}</li>);
//   });

  return (
    <div>
      <h2 className="text-2xl ml-10">People List</h2>
      <ul className="m-10">
        {people.map(function (p, index) {
                return <li key={index}>{p}</li>;
        })}
      </ul>
    </div>
  );
};
