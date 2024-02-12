import React from 'react'
import { useState } from 'react'

const PackegingList = ({initialItems, setItems}) => {
    const clearList = () => {
        const confirmed = window.confirm('Are you sure you want to clear list?')
        if (confirmed) setItems([])
    }
    const [sortBy, setSortBy] = useState('input');
    console.log(sortBy)
    console.log(initialItems)
    const deleteFromList = (id) => {
        setItems(initialItems.filter((items) => items.id != id))
    
    }
    const CheckValue = (id) => {
        setItems(initialItems.map((item) => item.id === id ? {...item, packed:!item.packed} : item));
    
    }
  return (
    <div className='list'>
        <ul style={{overflow:'hidden'}}>
            {initialItems.map((item) => {
                return(
                <li>
                    <input type="checkbox" value={item.packed} onChange={()=> CheckValue(item.id)}/>
                    <span style={item.packed ? {textDecoration:"line-through"} : {}}>
                        {item.quantity}
                        {item.description}
                    </span>
                    <button onClick={()=> deleteFromList(item.id)}>❌</button>
                </li>)
            })}
        </ul>
        <div className='actions'>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
                <option value="input">Sort By Input</option>
                <option value="description">Sort By Description</option>
                <option value="packed">Sort By Packed Status</option>
            </select>
            <button onClick={clearList}>Clear List</button>
        </div>
    </div>
  )
}

export default PackegingList