import React from 'react';

const Button = ({ handelClick, children }) => {
  console.log("Button render");
  return (
    <>
      <button onClick={handelClick}>{children}</button>
    </>
  );
};


export default React.memo(Button);