import React from "react";

export const Item = ({ name, isPacked }) => {
  // logical part
  const isCheckMark = isPacked ? "✅" : "❌";
  // const isCheckMark = isPacked && "✅";

  // view part
  return (
    <>
      {/* <li className=''>{name} {isPacked? "✅":null}</li> */}
      <li className={isPacked ? "line-through":""}>
        {name}
        {isCheckMark}
      </li>
    </>
  );
};

export const Items = ({ name, importance }) => {
  const isImportance = importance > 0 && ` (Importance: ${importance})`;

  return (
    <>
      <li>
        {name} {isImportance}
      </li>
    </>
  );
};


export const Drink = ({ name }) => {
  let part;
  let caffine;
  let age;
  if (name === "tea") {
    part = "tea";
    caffine = "15–70 mg/cup";
    age = "4,000+ years";
  } else if (name === "coffee") {
    part = "caffine";
    caffine = "80–185 mg/cup";
    age = "1,000+ years";
  }
  return (
    <section>
      <h2 className="text-2xl">Name: {name}</h2>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
};
