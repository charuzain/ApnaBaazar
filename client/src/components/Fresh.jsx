import React from 'react'
import FreshList from './FreshList'

export const Fresh = (props) => {
  console.log(props.fresh)
  const parsedItem = props.fresh.filter(item => item.category_id === 1)
  console.log(parsedItem)
  return (
    <div>

      {parsedItem.map(item => <FreshList key={item.id}{...item}/>)}
    </div>
  )
}
