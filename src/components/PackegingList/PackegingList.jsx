import React from 'react'

const PackegingList = ({initialItems, setItems}) => {
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
    </div>
  )
}

export default PackegingList