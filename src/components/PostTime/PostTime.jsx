import React from 'react'
import "./PostTime.css"

const PostTime = () => {
  return (
    <div className='post-time'>
        <p className='post-time-list'>
            <div className='time'>
                <span>
                00:00AM
                </span>
                <div className='dot'></div>
            </div>
            <div className='date'>
                <span>Jan 01, 2022</span>
                <div className='dot'></div>
            </div>
            <div className='device-type'>
                <span>Twitter for iphone</span>
            </div>
        </p>
    </div>
  )
}

export default PostTime