import LikesTweets from "../LikesTweets/LikesTweets";
import PostTime from "../PostTime/PostTime";
import TweetIcons from "../TweetIcons/TweetIcons";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Post.css"

const Post = () => {
    return <>
    <div className="post">
        <UserAvatar/>
        <p className="post-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur neque voluptatem possimus quis, officia laudantium eligendi atque natus doloribus quo nostrum in! Architecto veritatis aperiam asperiores voluptates impedit officia.
            <span className="tags">#twittermockup</span>
        </p>
        <PostTime/>
        <LikesTweets/>
        <TweetIcons/>
    </div>
    </>
}

export default Post;