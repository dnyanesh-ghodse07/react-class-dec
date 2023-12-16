import React from 'react'
import "./LikesTweets.css"
const LikesTweets = () => {
  return (
    <div className='likes-tweets'>
        <div className="retweet">
            <span className='count'>100k</span>Retweets
        </div>
        <div className="quotes">
        <span className='count'>50k</span>Quote Tweets
        </div>
        <div className="likes">
        <span className='count'>300k</span>Like
        </div>
    </div>
  )
}

export default LikesTweets