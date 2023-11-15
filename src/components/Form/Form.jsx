import React, { useState } from 'react'

const Form = ({handleAddItem}) => {
    const [option, setOption] = useState(1);
    const [description, setDescription] = useState('');
    const options = [
        {id : 1},
        {id : 2},
        {id : 3},
        {id : 4},
        {id : 5},
        {id : 6},
    ]

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleAddItem({
            id: new Date(),
            description:description,
            quantity:option,
            packed:false,
        })
    }
    
  return (
    <form className='add-form' onSubmit={handleSubmitForm}>
        <h3 className=''>What do you need for your 😍 trip?</h3>
        <select name="" id=""  onChange={e=>setOption(e.target.value)}>
            {options.map((option) => {
                return(
                    <option value={option.id} key={option.id}>{option.id}</option>
                )
            })}
        </select>
        <input type="text" placeholder='item...' value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <button>Add </button>
    </form>
  )
}

export default Form