import React from 'react'

const ShowCount = ( { count, title } ) => {
    console.log(`show count ${count}`);
  return (
    <>
        <p>{title} {count}</p>
    </>
  )
}

export default React.memo(ShowCount)