import React, { useState } from 'react'

const TodoList = () => {
    const [text,setText] = useState("");
    const [list,setList] = useState(["apple"]);
    console.log(list)

    const handleAddItems = () => {
        if(!text) return
        setList((prev) => {
           return [...prev,text]
        })
    }

  return (
    <div>
       <input type="text" onChange={(e) => {
        setText(e.target.value.trim())

       }}/>
       <button onClick={handleAddItems}>Add</button>
       <div className='item-list'>
            {
                list.map(item => {
                    return <p key={item}>{item}</p>
                })
            }
       </div>
    </div>
  )
}

export default TodoList