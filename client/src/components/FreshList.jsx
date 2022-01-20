import React from 'react'

export default function FreshList(props) {
  console.log(props)
  const { id, price, name, description,image} = props
  return (
    <div>
      <h1>{price}</h1>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <img src={image}/>
    </div>
  )
}
