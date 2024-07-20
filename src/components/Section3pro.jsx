import React from 'react'

const Section3pro = (props) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={props.picture} alt="picture" />
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default Section3pro
