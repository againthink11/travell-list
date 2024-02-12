import React from 'react'

const Stats = ({numverOfItem, packedItems}) => {
  return (
    <footer className='stats'>
        <em>😍You have {numverOfItem || 0} items on your list, and you already packed {packedItems || 0} ({Math.round((packedItems / numverOfItem ) * 100)} %)</em>
    </footer>
  )
}

export default Stats