import React, { useState } from 'react'
import { FaRetweet } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
import "./TweetIcons.css"


const TweetIcons = () => {
    const [isLike,setIsLike] = useState(false)
    // const [count, setCount] = useState(0)

    const handleLike = () => {
        setIsLike((prev) => !prev)
    }



  return (
    <div className='icons'>
        <div className="icon">
            <TbMessageCircle2/>
        </div>
        <div className="icon">
            <FaRetweet />
        </div>
        <div className="icon" onClick={handleLike}>
            {
                isLike ? <FaHeart/> : <FaRegHeart/>
            }
        </div>
        
    </div>
  )
}

export default TweetIcons