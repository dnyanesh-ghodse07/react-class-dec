import React, { useState } from 'react'
import './TodoList.css'
import ListItem from './components/ListItem';

const TodoList = () => {
    const [text,setText] = useState("");
    const [list,setList] = useState(
      [ 
      // {
      //   id: 1,
      //   title: "apple"
      // },
      // {
      //   id: 2,
      //   title:  "Orange"
      // }
     ]
    );

    const handleAddItems = () => {
        if(!text) return
        const newId = list.length + 2;
        const newText = {
          id: newId,
          title: text
        }
        setList((prev) => {
           return [...prev,newText]
        })
    }

    const handleDeleteItem = (id) => {
      setList(prev => prev.filter(item => item.id !== id))
    }

  return (
    <div>
      <div className="input-fields">
        <input className='text-input' type="text" onChange={(e) => {
          setText(e.target.value.trim())
        }}/>
        <button className='add-btn' onClick={handleAddItems}>Add</button>
      </div>
       <div className='list'>
            {
                list.map(item => {
                    return <ListItem key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>
                })
            }
       </div>
    </div>
  )
}

export default TodoList