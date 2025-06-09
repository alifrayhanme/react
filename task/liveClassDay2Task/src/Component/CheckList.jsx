import React, { useState } from "react";
import initialData from "../Data/db";

export const CheckList = () => {
  const [massages, setMassages] = useState(initialData);

  const addMassage = {
    id: Date.now(),
    title: "Lorem ipsum dolor sit amet.",
    isComplete: false,
  };
  const add = () => {
    const newMassage = [...massages, addMassage];
    setMassages(newMassage);
  };

  const deleteMassage = (id) => {
    const filterMassage = massages.filter((filterItem) => {
      return filterItem.id !== id;
    });
    setMassages(filterMassage);
  };

  const editMassage = (title) => {
    const edited = massages.map(function (massageItem) {
        if (massageItem.title === title) {
            massageItem.title = `edit ${title}`
        }
        return massageItem
    });
    setMassages(edited)
  };

  return (
    <div>
      {massages.map((massageItem) => {
        return (
          <li key={massageItem.id}>
            {massageItem.title}
            <button onClick={() => deleteMassage(massageItem.id)}>
              delete
            </button>
            <button onClick={() => editMassage(massageItem.title)}>edit</button>
          </li>
        );
      })}

      <button onClick={add}>addMassage</button>
    </div>
  );
};
