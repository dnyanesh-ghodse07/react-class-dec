import React from 'react'
import {FaTrash} from "react-icons/fa6"

const ListItem = (props) => {

  return (
    <div className='list-item'>
        <div className="title">
        {props.item.title}
        </div>
        <div className="icons">
            <FaTrash onClick={() => props.handleDeleteItem(props.item.id)}/>
        </div>
    </div>
  )
}

export default ListItem