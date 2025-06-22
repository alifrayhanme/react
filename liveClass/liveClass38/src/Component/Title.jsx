import React from 'react'

const Title = ({heading}) => {
    console.log("render title");
  return (
    <>
        <h2>{heading}</h2>
    </>
  )
}

export default React.memo(Title)